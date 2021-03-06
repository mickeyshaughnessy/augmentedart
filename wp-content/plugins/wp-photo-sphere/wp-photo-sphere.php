<?php
/*
 * WP Photo Sphere v2.4
 * http://jeremyheleine.me/#wp-photo-sphere
 *
 * Copyright (c) 2013,2014 Jérémy Heleine
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/*
Plugin Name: WP Photo Sphere
Plugin URI: http://jeremyheleine.me/#wp-photo-sphere
Description: A filter that displays 360-degree panoramas taken with Photo Sphere. Please read the readme file for instructions.
Version: 2.4
Author: Jérémy Heleine
Author URI: http://jeremyheleine.me
License: MIT
*/

function wpps_activation() {
	update_option('wpps_settings', array('style' => 'margin: 10px auto;', 'style_a' => 'padding: 5px; background-color: #3D3D3D; color: #FFFFFF;', 'class_a' => '', 'text' => 'WP Photo Sphere (%title%)', 'width' => '560px', 'max_width' => '100%', 'height' => '315px', 'hide_link' => 0, 'anim_speed' => '2rpm'));
}

function wpps_deactivation() {
	delete_option('wpps_settings');
}

function wpps_register_scripts() {
	wp_register_script('wpps-three', plugin_dir_url(__FILE__) . 'lib/three.min.js', array(), '1.0', true);
	wp_register_script('wpps-psv', plugin_dir_url(__FILE__) . 'lib/photo-sphere-viewer.js', array('wpps-three'), '1.3', true);
	wp_register_script('wp-photo-sphere', plugin_dir_url(__FILE__) . 'wp-photo-sphere.js', array('jquery', 'wpps-psv'), '2.1', true);
}

function wpps_enqueue_admin_scripts() {
	if (floatval(get_bloginfo('version')) >= 3.5)
		wp_enqueue_script('wpps-admin', plugin_dir_url(__FILE__) . 'wpps-admin.js', array('jquery'), '1.0', true);
}

function wpps_add_pano_button() {
	if (floatval(get_bloginfo('version')) >= 3.5) {
		?>
		<a href="#" id="insert-wpps-button" class="button" title="<?php _e('Add a panorama', 'wp-photo-sphere'); ?>">
			<img src="<?php echo plugin_dir_url(__FILE__); ?>wpps-button.png" alt="" style="margin: 0 2px; padding: 0; height: 100%; width: auto; vertical-align: top;" />
			<span><?php _e('Add a panorama', 'wp-photo-sphere'); ?></span>
		</a>
		<?php
	}
}

function wpps_lang() {
	// i18n
	load_plugin_textdomain('wp-photo-sphere', false, dirname(plugin_basename(__FILE__)) . '/lang');
}

function wpps_shortcode_attributes($atts) {
	$sizes = array('width', 'max_width');
	$numbers = array('height', 'anim_after');

	foreach ($atts as $att => $value) {
		// Unnamed attribute
		if (is_int($att)) {
			// ID
			if (is_numeric($value))
				$atts['id'] = $value;

			// Boolean
			else
				$atts[$value] = 1;

			unset($atts[$att]);
		}

		// Size
		else if (in_array($att, $sizes))
			$atts[$att] = wpps_sanitize_size($value);

		// Numbers
		else if (in_array($att, $numbers))
			$atts[$att] = intval($value);
	}

	return $atts;
}

function wpps_handle_shortcode($atts) {
	wp_enqueue_script('wp-photo-sphere');
	$settings = get_option('wpps_settings');

	// Attributes
	$atts = wpps_shortcode_attributes($atts);
	$atts = shortcode_atts(array(
			'id' => 0,
			'width' => $settings['width'],
			'max_width' => $settings['max_width'],
			'height' => intval($settings['height']),
			'autoload' => 0,
			'anim_after' => 'default',
			'anim_speed' => $settings['anim_speed']
		), $atts);

	// Style
	$id = $atts['id'];
	$url = wp_get_attachment_url($id);
	$text = str_replace('%title%', get_the_title($id), $settings['text']);

	$style = $settings['style'] . ' width: ' . $atts['width'] . '; max-width: ' . $atts['max_width'] . ';';
	$class_a = (!empty($settings['class_a'])) ? ' class="' . $settings['class_a'] . '"' : '';

	// Display
	$output = '<div class="wpps_container" style="' . $style . '">';
	$output .= '<a href="' . $url . '?height=' . $atts['height'] . '&amp;hide=' . $settings['hide_link'] . '&amp;autoload=' . $atts['autoload'] . '&amp;anim_after=' . $atts['anim_after'] . '&amp;anim_speed=' . $atts['anim_speed'] . '" style="display: block; ' . $settings['style_a'] . '"' . $class_a . '>' . $text . '</a>';
	$output .= '<div style="position: relative;"></div>';
	$output .= '</div>';

	return $output;
}

function wpps_create_menu() {
	add_options_page('WP Photo Sphere', 'WP Photo Sphere', 'manage_options', __FILE__, 'wpps_options_page');
	add_action('admin_init', 'wpps_register_settings');
}

function wpps_register_settings() {
	register_setting('wpps_options', 'wpps_settings', 'wpps_sanitize_settings');
}

function wpps_options_page() {
	?>
	<div class="wrap">
		<h2>WP Photo Sphere</h2>

		<form method="post" action="options.php">
			<?php
			settings_fields('wpps_options');
			$settings = get_option('wpps_settings');

			$anim_speed = array();
			preg_match('#^([0-9-]+(?:\.[0-9]*)?)([a-z ]+)$#', $settings['anim_speed'], $anim_speed);
			?>
			<table class="form-table">
				<tr valign="top">
					<th><label for="wpps_settings_style"><?php _e('Style of the container', 'wp-photo-sphere'); ?></label></th>
					<td><textarea id="wpps_settings_style" name="wpps_settings[style]" cols="40" rows="5"><?php echo wpps_style_for_textarea($settings['style']); ?></textarea></td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_style_a"><?php _e('Style of the link', 'wp-photo-sphere'); ?></label></th>
					<td><textarea id="wpps_settings_style_a" name="wpps_settings[style_a]" cols="40" rows="5"><?php echo wpps_style_for_textarea($settings['style_a']); ?></textarea></td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_class_a"><?php _e('Class of the link', 'wp-photo-sphere'); ?></label></th>
					<td><input type="text" id="wpps_settings_class_a" name="wpps_settings[class_a]" size="40" value="<?php echo $settings['class_a']; ?>" /></td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_text"><?php _e('Text of the link', 'wp-photo-sphere'); ?></label></th>
					<td><input type="text" id="wpps_settings_text" name="wpps_settings[text]" size="40" value="<?php echo $settings['text']; ?>" /></td>
				</tr>
				<tr valign="top">
					<th></th>
					<td><?php _e('Use the tag %title% to insert the panorama title', 'wp-photo-sphere'); ?></td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_width"><?php _e('Default width', 'wp-photo-sphere'); ?></label></th>
					<td><input type="text" id="wpps_settings_width" name="wpps_settings[width]" size="5" value="<?php echo $settings['width']; ?>" /></td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_max_width"><?php _e('Default maximum width', 'wp-photo-sphere'); ?></label></th>
					<td><input type="text" id="wpps_settings_max_width" name="wpps_settings[max_width]" size="5" value="<?php echo $settings['max_width']; ?>" /></td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_anim_speed"><?php _e('Default animation speed', 'wp-photo-sphere'); ?></label></th>
					<td>
						<input type="text" id="wpp_settings_anim_speed" name="wpps_settings[anim_speed_value]" size="4" value="<?php echo $anim_speed[1]; ?>" />
						<select name="wpps_settings[anim_speed_unit]">
							<option value="rpm" <?php selected($anim_speed[2], 'rpm'); ?>><?php _e('Revolutions per minute', 'wp-photo-sphere'); ?></option>
							<option value="rps" <?php selected($anim_speed[2], 'rps'); ?>><?php _e('Revolutions per second', 'wp-photo-sphere'); ?></option>
							<option value="dpm" <?php selected($anim_speed[2], 'dpm'); ?>><?php _e('Degrees per minute', 'wp-photo-sphere'); ?></option>
							<option value="dps" <?php selected($anim_speed[2], 'dps'); ?>><?php _e('Degrees per second', 'wp-photo-sphere'); ?></option>
							<option value="rad per minute" <?php selected($anim_speed[2], 'rad per minute'); ?>><?php _e('Radians per minute', 'wp-photo-sphere'); ?></option>
							<option value="rad per second" <?php selected($anim_speed[2], 'rad per second'); ?>><?php _e('Radians per second', 'wp-photo-sphere'); ?></option>
						</select>
					</td>
				</tr>
				<tr valign="top">
					<th><label for="wpps_settings_height"><?php _e('Default height', 'wp-photo-sphere'); ?></label></th>
					<td><input type="text" id="wpps_settings_height" name="wpps_settings[height]" size="5" value="<?php echo $settings['height']; ?>" /></td>
				</tr>

				<tr valign="top">
					<th><label for="wpps_settings_hide_link"><?php _e('Hide link', 'wp-photo-sphere'); ?></label></th>
					<td><input type="checkbox" id="wpps_settings_hide_link" name="wpps_settings[hide_link]" value="1"<?php checked((1 == $settings['hide_link'])); ?> /></td>
				</tr>
			</table>
			<?php submit_button(); ?>
		</form>
	</div>
	<?php
}

function wpps_style_for_textarea($style) {
	// One declaration per line in the options page
	return trim(preg_replace('#;\s*#', ';' . "\n", $style));
}

function wpps_sanitize_style($style) {
	// Removes line breaks
	return trim(preg_replace('#;\s*#', '; ', str_replace('"', '\'', $style)));
}

function wpps_sanitize_size($size, $allowed_units = array('px', '%', 'cm', 'in')) {
	$value = intval($size);
	$unit = trim(str_replace($value, '', $size));

	if (!in_array($unit, $allowed_units))
		$unit = 'px';

	return $value . $unit;
}

function wpps_sanitize_settings($values) {
	$values['style'] = wpps_sanitize_style($values['style']);
	$values['style_a'] = wpps_sanitize_style($values['style_a']);
	$values['class_a'] = trim($values['class_a']);
	$values['width'] = wpps_sanitize_size($values['width']);
	$values['max_width'] = wpps_sanitize_size($values['max_width']);
	$values['height'] = wpps_sanitize_size($values['height'], array('px'));
	$values['hide_link'] = ($values['hide_link']) ? 1 : 0;

	// Animation speed
	$speed_unit = $values['anim_speed_unit'];
	if (!in_array($speed_unit, array('rpm', 'rps', 'dpm', 'dps', 'rad per minute', 'rad per second')))
		$speed_unit = 'rpm';

	$values['anim_speed'] = floatval($values['anim_speed_value']) . $speed_unit;

	unset($values['anim_speed_value'], $values['anim_speed_unit']);

	return $values;
}

register_activation_hook(__FILE__, 'wpps_activation');
register_deactivation_hook(__FILE__, 'wpps_deactivation');
add_shortcode('sphere', 'wpps_handle_shortcode');
add_action('admin_menu', 'wpps_create_menu');
add_action('wp_enqueue_media', 'wpps_enqueue_admin_scripts');
add_action('media_buttons', 'wpps_add_pano_button', 15);
add_action('plugins_loaded', 'wpps_lang');
add_action('plugins_loaded', 'wpps_register_scripts');
?>
