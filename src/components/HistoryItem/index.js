import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const deleteHistoryOnClick = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item-container" key={eachItem.id}>
      <p className="time">{timeAccessed}</p>
      <div className="link-delete-container">
        <img src={logoUrl} className="logo-url" alt="na" />
        <p className="link">{title}</p>
        <p className="link">{domainUrl}</p>

        <button
          type="button"
          className="delete-icon-button"
          onClick={deleteHistoryOnClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="logo-url"
            alt="na"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
