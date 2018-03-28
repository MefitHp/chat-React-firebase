import React from 'react';

const styles = {
	container: {marginLeft: 'auto', marginRight: 'auto', maxWidth: 960, paddingRight: 10, paddingLeft: 10, boxShadow: '1px 1px 1px #000'},
	joseluis: {fontSize: 30, color: 'green', fontFamily: 'monospace'},
	smallText: {fontSize: 18},
	blue: {color: 'Dimgray'}
}
export const ChatDisplay = () => (
	<div style={{...styles.container}}>
		<h3 style={{...styles.joseluis, ...styles.blue}}>Chat Firebase</h3>
	</div>
	); 