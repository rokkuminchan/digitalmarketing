
import React from 'react';
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import Reason from '../blocks/Reason';
import Impression from '../blocks/Impression';
import JoinOwrTeam from '../blocks/JoinOwrTeam';

const GeneralRecruitPage =  () => {
	return (
		<React.Fragment>
			<Header />
			<Reason />
			<Impression />
			<JoinOwrTeam />
			<Footer />
		</React.Fragment>
	);
}

export default GeneralRecruitPage;
