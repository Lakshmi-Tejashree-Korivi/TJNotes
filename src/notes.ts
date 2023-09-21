export interface Note {
	id: number;
	title: string;
	text: string;
}

export const NOTES: Note[] = [
	{
	id: 1,
	title: 'Welcome',
	text: 'To add notes click on Add New. For viewing a note click on the note.',
	},
	{
		id: 2,
		title: "Lorem ipsum",
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
];