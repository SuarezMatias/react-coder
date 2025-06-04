import "./styles.css";

const ItemListContainer = ({ message_text: messageText = "Text default" }) => {
  return (
    <div className="item-list-container">
      <h2>{messageText}</h2>
    </div>
  );
};

export default ItemListContainer;
