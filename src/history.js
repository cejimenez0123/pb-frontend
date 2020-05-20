import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
history.listen((location, action) => {
    console.log("inside history listen");
})
export {history}