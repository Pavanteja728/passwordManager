import './index.css'

const PasswordItem = props => {
  const {passwordItem, onDelete, onCheck} = props
  const {website, user, passwordInput, background, id, fir} = passwordItem

  const onSelect = () => {
    onDelete(id)
  }

  return (
    <li>
      <div className="it">
        <div className="items">
          <div
            style={{backgroundColor: background, color: '#ffffff'}}
            className="firsts"
          >
            <p className="paragraph">{fir}</p>
          </div>
          <div className="item">
            <p className="itemPara">{website}</p>
            <p className="itemPara">{user}</p>
            {!onCheck && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars"
              />
            )}
            {onCheck && <p className="itemPara">{passwordInput}</p>}
          </div>
        </div>
        <button type="button" className="button" onClick={onSelect}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="del"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
