import React from 'react';
import Header from './components/header';
import CreateTemplate from './components/create-template';
import ListTemplate from './components/list-templates';
import TemplateDetails from './components/template-details';
import ReduxToastr from 'react-redux-toastr';
import { ThemeProvider } from 'styled-components';
import './assets/styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import {fetchMergeTags} from './actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

// Theme provider will help in integrating styled-components with SASS(SCSS)
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/styles/_variables.scss');
class App extends React.Component {
    render() {
        return (
            // ThemeProvider requires a theme of variables
            <ThemeProvider theme={theme}>
                <div className="app-wrapper">
                    <Header/>
                    <div className="main-container">
                        <Switch>
                            <Route exact path="/" component={ListTemplate}/>
                            <Route exact path="/create-template" component={CreateTemplate}/>
                            <Route exact path="/template/:templateId" component={TemplateDetails}/>
                        </Switch>
                    </div>
                    <ReduxToastr timeOut={5000}
                                 newestOnTop={true}
                                 position="top-right"
                                 transitionIn="fadeIn"
                                 transitionOut="fadeOut"
                                 progressBar
                                 closeOnToastrClick/>
                    <div className="clear"></div>
                </div>
            </ThemeProvider>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchMergeTags());
    }
}

export default withRouter(connect(() => {
    return {};
})(App));
