export type ActivityType = {
  _id: string;
  activity: string;
  createdAt: Date;
}

export type ChecklistType = {
  _id: string;
  checklist: string | undefined;
  isChecked: boolean | undefined;
}

export type CardType = {
  _id: string;
  columnId: string;
  cardTitle: string;
  note: string;
  isCardCompleted: boolean;
  isArchived: boolean;
  checklists: Array<ChecklistType>;
  activities: Array<ActivityType>;
  dueDate: Date | undefined;
  order: number | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export type ColumnsType = {
  columns: ColumnType;
  columnOrder: Array<string>;
  archive: ColumnItemType;
}

export type ColumnType = {
  [id: string]: ColumnItemType;
}

export type  ColumnDataType = {
  success: boolean;
  data: ColumnItemType;
}

export type AddColumnProps = {
  colorIndex: number;
  addColumn: (columnTitle: string, card: CardType | undefined) => void;
}

export type NewCardType = {
  _id: string;
  columnId: string | undefined;
  cardTitle: string | undefined;
  note: string | undefined;
  isCardCompleted: boolean | undefined;
  isArchived: boolean | undefined;
  dueDate: Date | null;
}

export type ColumnItem = {
  _id: string;
  title: string;
  cards: Array<CardType>;
  colorIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ColumnItemType = {
  _id: string;
  title: string;
  cards: Array<CardType>;
  colorIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ChecklistProps = {
  currentColumn: ColumnItemType;
  currentCard: CardType;
  addChecklist: (
    currentColumnId: string,
    currentCardId: string,
    checklist: string
  ) => void;
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklist: ChecklistType
  ) => void;
  deleteChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string
  ) => void;
}


export type ColumnProps = ChecklistProps & {
  index: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  setCardForOpen: (columnId: string, cardId: string) => void;
  column: ColumnItemType;
  projectName: string;
  handleModalClose: () => void;
  addChecklist: (columnId: string, cardId: string, checklist: string) => void;
  addActivity: (columnId: string, cardId: string, activity: string) => void;
  updateDate: (columnId: string, cardId: string) => void;
  updateCard: (columnId: string, card: NewCardType) => void;
  convertDate: (date: Date) => string;
  deleteCard: (columnId: string, cardId: string) => void;
  archiveCard: (columnId: string, cardId: string) => void;
  addCard: (columnId: string, cardTitle: string) => void;
  updateColumnTitle: (_id: string, title: string) => void;
  deleteColumn: (id: string) => void;
  archiveColumnId: string;
}

export type CardModalProps = CommonProps & {
  open: boolean;
  projectName: string;
  handleModalClose: () => void;
  addChecklist: (columnId: string, cardId: string, checklist: string) => void;
  updateChecklist: (
    columnId: string,
    cardId: string,
    checklist: ChecklistType
  ) => void;
  addActivity: (columnId: string, cardId: string, activity: string) => void;
  updateDate: (columnId: string, cardId: string) => void;
  updateCard: (columnId: string, card: NewCardType) => void;
  deleteChecklist: (
    columnId: string,
    cardId: string,
    checklistId: string
  ) => void;
  convertDate: (date: Date) => string;
  deleteCard: (columnId: string, cardId: string) => void;
  archiveCard: (columnId: string, cardId: string) => void;
  addCard: (columnId: string, cardTitle: string) => void;
}

export type CardProps = {
  setCardForOpen: (columnId: string, cardId: string) => void;
  setOpen: (open: boolean) => void;
  column: ColumnItemType;
  card: CardType;
  convertDate: (date: Date) => string;
  provided: any;
  isDragging: boolean;
}

export type CommonProps = {
  currentCard: CardType;
  currentColumn: ColumnItemType;
}

export type DueDateProps = CommonProps & {
  updateCard: (columnId: string, card: NewCardType) => void;
  convertDate: (date: Date) => string;
}

export type MainProps = {
  _id: string;
  changeProjectName: (project: string) => void;
  projectName: string;
}

export type RouterType = {
  _id: string;
  project: string;
  createdAt: Date;
  updatedAt: Date;
}

export type RouterDataType = {
  success: boolean;
  data: RouterType;
}
