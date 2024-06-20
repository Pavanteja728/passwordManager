import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

const colors = ['green', 'red', 'yellow', 'blue', 'orange', 'pink', 'brown']

class PasswordManager extends Component {
  state = {
    website: '',
    user: '',
    passwordInput: '',
    passwordList: [],
    searchInput: '',
    onCheck: false,
  }

  websiteName = event => {
    this.setState({
      website: event.target.value,
    })
  }

  userName = event => {
    this.setState({
      user: event.target.value,
    })
  }

  password = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  addPassword = event => {
    event.preventDefault()

    const {website, user, passwordInput} = this.state
    const backgroundColor = colors[Math.ceil(Math.random() * colors.length - 1)]

    const newPassword = {
      id: uuidv4(),
      website,
      user,
      passwordInput,
      background: backgroundColor,
      fir: user[0],
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
    }))
  }

  searches = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    const {passwordList} = this.state
    const delData = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: delData,
    })
  }

  checks = event => {
    if (event.target.checked) {
      this.setState({
        onCheck: true,
      })
    }
    if (!event.target.checked) {
      this.setState({
        onCheck: false,
      })
    }
  }

  lens = () => {
    const {passwordList} = this.state
    if (passwordList.length === 0) {
      return false
    }
    return true
  }

  render() {
    const {
      website,
      user,
      passwordInput,
      passwordList,
      searchInput,
      onCheck,
      showComments,
    } = this.state
    console.log(website)
    console.log(user)
    console.log(passwordInput)
    console.log(showComments)

    const filterData = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bgCont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="applogo"
        />
        <div className="cardCont">
          <div className="passwordGen">
            <h1 className="passwordHead">Add New Password</h1>
            <form className="form-action" onSubmit={this.addPassword}>
              <div className="pass">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="passImg"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="passInput"
                  onChange={this.websiteName}
                  value={website}
                />
              </div>
              <div className="pass">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="passImg"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="passInput"
                  onChange={this.userName}
                  value={user}
                />
              </div>
              <div className="pass">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="passImg"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="passInput"
                  onChange={this.password}
                  value={passwordInput}
                />
              </div>
              <div className="buttonPos">
                <button type="submit" className="subPassword">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="passwordImg"
          />
        </div>
        <div className="passwords">
          <div className="passwordStart">
            <div className="counts">
              <h1 className="passwordShow">Your Passwords</h1>
              <p className="passwordCount">{passwordList.length}</p>
            </div>
            <div className="searchCont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="searchImg"
                alt="search"
              />
              <input
                type="search"
                placeholder="search"
                className="input"
                onChange={this.searches}
              />
            </div>
          </div>
          <hr
            style={{backgroundColor: ' #f8fafc', height: '1px', border: 'none'}}
          />
          <div className="checkboxes">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onClick={this.checks}
            />
            <label htmlFor="checkbox" className="checkPass">
              Show Passwords
            </label>
          </div>
          {this.lens() && (
            <ul className="unis">
              {filterData.map(each => (
                <PasswordItem
                  passwordItem={each}
                  key={each.id}
                  onDelete={this.onDelete}
                  onCheck={onCheck}
                />
              ))}
            </ul>
          )}
          {!this.lens() && (
            <div className="commentSec">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="commentsImg"
              />
              <p className="commentHead">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
