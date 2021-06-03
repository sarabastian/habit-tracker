export default interface HabitInterface {
  id: number;
  day: {
    created_at?: string;
    date: string;
    id: number;
    updated_at?: string;
  };
  habit: {
    created_at?: string;
    id: number;
    name: string;
    updated_at?: string;
  };
  completed: boolean;
}
