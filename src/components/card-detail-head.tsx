import { useState, KeyboardEvent } from 'react';
import { CommonProps, NewCardType } from './types';

type CardDetailHeadProps = CommonProps & {
  updateCard: (columnId: string, card: NewCardType) => void;
}

const CardDetailHead = (props: CardDetailHeadProps) => {
  const [cardDetailTitle, setCardDetailTitle] = useState(
    props.currentCard.cardTitle
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const newCard = {
        _id: props.currentCard._id,
        columnId: undefined,
        cardTitle: cardDetailTitle,
        note: undefined,
        isCardCompleted: undefined,
        isArchived: undefined,
        dueDate: null,
      };
      props.updateCard(props.currentColumn._id, newCard);
    }
  };
  return (
    <div id="transition-modal-title">
      <input
        id={props.currentCard._id}
        disabled={props.currentCard.isArchived}
        className="card-deatil-title border-none"
        type="text"
        onChange={(e) => setCardDetailTitle(e.target.value)}
        value={cardDetailTitle}
        onKeyDown={(e: KeyboardEvent) => handleKeyDown(e)}
      />
    </div>
  );
}
export default CardDetailHead;
