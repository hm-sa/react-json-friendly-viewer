export type JsonObject = { [Key in string]?: JSONValue };

export type JsonArray = JSONValue[];

export type JsonPrimitive = string | number | boolean | null;

export type JSONValue = JsonPrimitive | JsonObject | JsonArray;

export type FieldData =
	| {
			type: 'prop';
			name: string;
			parentName?: string;
	  }
	| {
			type: 'arrayItem';
			index: number;
			parentName?: string;
	  };

export interface Formatter {
	boolean: (value: boolean) => string;
	string: (value: string) => string;
	none: () => string;
	number: (value: number) => string;
	prop: (name: string, parentName?: string) => string;
	arrayItem: (index: number, parentName?: string) => string;
}
