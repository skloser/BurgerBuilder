import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<Sidedrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
