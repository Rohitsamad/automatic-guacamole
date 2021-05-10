import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
    const { go } = navigation;
    const { 
        tournamentname,
        team1,
        team2,
        team3,
        team4,
        team5,
        team6,
        team7,
        team8,
        team11,
        team12,
        team13,
        team14,
        team21,
        team22,
        winner
     } = formData;
    return (
        <Container maxWidth='sm'>
            <h3>Review</h3>
            <RenderAccordion summary="tournamentname" go={ go } details={[
                { 'tournamentname':tournamentname },
            ]} />
            <RenderAccordion summary="one" go={ go } details={[
                {   'team1':team1 },
                {   'team1':team2 },
                {   'team1':team3 },
                {   'team1':team4 },
                {   'team1':team5 },
                {   'team1':team6 },
                {   'team1':team7 },
                {   'team1':team8 },
                    
            ]} />
            <RenderAccordion summary="two" go={ go } details={[
                {   'team1':team11 },
                {   'team1':team12 },
                {   'team1':team13 },
                {   'team1':team14 },              
                    
            ]} />

            <RenderAccordion summary="Submit" go={ go } details={[
                {   'team1':team21 },
                {   'team1':team22 },              
                    
            ]} />
            <RenderAccordion summary="winner" go={ go } details={[
                {   'winner':winner },              
                    
            ]} />
            

            <Button 
            color="primary"
            variant="contained"
            style={{ marginTop: '1.5rem' }}
            onClick={() => go('fixture')}>
                submit
            </Button>
            
        </Container>
    );
};

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >{summary}</AccordionSummary>
      <AccordionDetail>
        <div>
          { details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];
  
            return <ListItemText key={index}>{`${objKey}: ${objValue}`} <IconButton
            color="primary"
            component="span"
            onClick={() => go(`${summary.toLowerCase()}`)}
          ><EditIcon /></IconButton> </ListItemText>
  
          }) }
          <IconButton
            color="primary"
            component="span"
            onClick={() => go(`${summary.toLowerCase()}`)}
          ><EditIcon /></IconButton>
        </div>
      </AccordionDetail>
    </Accordion>
  )