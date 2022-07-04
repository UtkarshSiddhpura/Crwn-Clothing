import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<div className="navigation-logo">
					<Link to="/"><CrwnLogo title="logo"/></Link>
				</div>	
				<div className="navigation-links">
					<Link className="navigation-link" to="/shop">	
						Specials
					</Link>	
					<Link className="navigation-link" to="/shop">	
						Explore
					</Link>	
					<Link className="navigation-link" to="/shop">	
						Cart
					</Link>	
					<Link className="navigation-link" to="/auth">	
						sign-in
					</Link>	
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
