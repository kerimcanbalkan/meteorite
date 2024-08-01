import { KaboomCtx } from "kaplay";

export function makeRestartButton(k: KaboomCtx, font: string,text:string) {
	let width = 120;
	let height = 40;
	let textsize = 30;
	let posY = k.height() - k.height() / 3.2;

	if (k.width() < 640) {
		width = 80;
		height = 30;
		textsize = 23;
		posY = k.height() - k.height() / 2.8;
	}

	const button = k.make([
		k.rect(width, height),
		k.color(0, 0, 0),
		k.area(),
		k.outline(2, k.rgb(255, 255, 255)),
		k.anchor("center"),
		k.fixed(),
		k.pos(k.width() / 2, posY)
	]);

	const buttonText = button.add([
		k.text(text, {
			size: textsize,
			font: font,
			align: "center"
		}),
		k.anchor("center"),
		k.pos(0, -textsize / 10)
	]);


	button.onHover(() => {
		button.use(k.color(255, 255, 255));
		buttonText.use(k.color(0, 0, 0));

	});

	button.onHoverEnd(() => {
		button.use(k.color(0, 0, 0));
		buttonText.use(k.color(255, 255, 255));

	});


	return button;
}
