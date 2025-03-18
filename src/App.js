import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "./assets/Style/style.css";
import Navbar from "./Layout/Navbar/Navbar";
import routes from "./routes";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="routes">
                <Switch>
                    {routes.map(item => (
                        <Route
                            key={item.id}
                            path={item.path}
                            component={item.component}
                            exact
                        />
                    ))}
                </Switch>
            </div>
        </div> // Закрыл тег div
    );
};

export default App;
