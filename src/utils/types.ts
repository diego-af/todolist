import { ReactNode } from "react";


export interface PropsChildren {
	children: ReactNode;
}


export interface TodoListProps  {
	id?: number;
 name: string;
	checked: boolean
	created_at?: Date;
	

}
export interface TodoListPropsContext  {
 todo: TodoListProps[];
 setTodo: (todo: TodoListProps[] | ((prevTodo: TodoListProps[]) => TodoListProps[])) => void;
	shouldReload: boolean;
	setShouldReload:(shouldReload: boolean) => void;
}

export type CheckedProps = {
	isChecked: boolean;
}
	export type viewportHeightProps = {
		viewportHeight: number;
	}
