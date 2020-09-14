import React, { Component } from "react";
import Faq from "react-faq-component";
import "./componentStyles.css"
    
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "What Covid-19 precautions have you put in place?",
                content: `We have a comprehensive plan to maintain a safe and healthy gym environment, including regular sanitising and ensuring ample personal space.`,
            },
            {
                title: "What am I committing to when I sign up?",
                content:
                    "No long-term commitments. You’re just paying for one our intro 3x PT in one week £99, and that’s it. Think of it as a no-strings tester that’ll help you make an informed decision about whether our gym is right for you and which membership might suit you best if you do decide to carry on.",
            },
            {
                title: "Do I have to be fit?",
                content: `No. Our members vary in age and fitness level. Yes, you’ll see some super-fit people here, but they all started somewhere. Your fitness goal is unique to you. We’ll assess your current level, personalise your programme and take it at a pace that works for you.`,
            },
            {
                title: "What if I have aches, pains or injuries?",
                content: "No problem. Many of our members come to us with injuries or liferelated issues like joint niggles, back pain and post-baby abs. We’re not physiotherapists, but the team is highly experienced in creating programmes that work with, and ultimately improve, a wide range of conditions.",
            },
            {
                title: "What if I need to miss days during the 7 Day trial?",
                content: "Don’t worry. If something comes up or you’re away for a few days, let us know, and we’ll happily extend the trial period.",
            },
            {
                title: "What happens after the trial?",
                content: "You’re free to choose. If you want to carry on and work with us to reach your fitness goals (80% of our trial members do), we’ll suggest the right membership option and programme going forward. If you decide that Duo Clinic isn’t for you, you can simply say goodbye. We’ll be sorry to see you go, but we accept that we can’t be all things to all people.",
            },
            {
                title: "What if I register then change my mind?",
                content: "You’ll get your money back. No hassle, no questions, no hard feelings. The thought of forcing anyone into fitness is our worst nightmare.",
            },
            {
                title: "What are the ongoing membership costs?",
                content: "Our package prices are all pay as you go so no long term commitment or monthly fees. And all our memberships include personal training, full assesments and nutrional guidance with your dedicated coachings support guiding you to stay on track and reach you fitness goals.",
            },
           
        ],
    };
     
    const styles = {
        // bgColor: 'white',
        titleTextColor: "#999",
        rowTitleColor: "#999",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
     
    const config = {
        animate: true,
        // arrowIcon: "V",
        
    };
     
    export default class App extends Component {
        render() {
            return (
            
                <section className="faq" >
                   
                <div className="faqDiv">
                    <Faq className="faqComponent" data={data} styles={styles} config={config} />
                </div>
                </section>
                
            );
        }
    }