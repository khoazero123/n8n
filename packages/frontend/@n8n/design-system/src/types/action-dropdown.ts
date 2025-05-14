import type { KeyboardShortcut } from '@n8n/design-system/types/keyboardshortcut';

export interface ActionDropdownItem<T extends string> {
	id: T;
	label: string;
	badge?: string;
	badgeProps?: Record<string, unknown>;
	icon?: string;
	divided?: boolean;
	disabled?: boolean;
	shortcut?: KeyboardShortcut;
	customClass?: string;
	checked?: boolean;
}
