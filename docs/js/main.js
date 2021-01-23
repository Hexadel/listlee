/*! listlee v0.0.1 | (c) 2021 Wessels de Wet | MIT License | https://github.com/Wesselsdewet/listllee */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);