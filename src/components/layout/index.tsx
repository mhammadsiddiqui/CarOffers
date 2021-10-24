import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        {/* adding navigation */}
        <NavMenu />
        {/* calling main components */}
        <div className='mb-5'>
            <Container>
                {props.children}
            </Container>
        </div>
        {/* setting footer */}
        <footer className="container-fluid fixed-bottom text-center text-white bg-dark">Sixt Car Offers App</footer>
    </React.Fragment>
);

export default Layout;
