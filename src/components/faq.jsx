import React, { Component } from "react";
import Faq from "react-faq-component";
import "./componentStyles.css"
    
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Is This Crossfit/Bootcamp Training?",
                content: `No. This is not CrossFit, Bootcamp or HIIT training. Our sessions are structured, personalized and incorporate a variety of techniques and exercises.`,
            },
            {
                title: "Is Duo Clinic for me?",
                content:
                    "Our INNER CIRCLE Group Training is for anyone who is looking to strength train. For example, if your goal is weight loss, we will personalize the session by assigning a more metabolically demanding rep scheme with shorter rest periods. If your goal is athletic performance, we will implement specialized techniques focusing on strength and speed development",
            },
            {
                title: "How long are the sessions?",
                content: `The INNER CIRCLE Group Training sessions are 55-minutes. Our Conditioning classes are 30 minutes. We do recommend arriving 10-15 minutes early if possible to complete our Dynamic Warm-Up prior to the session.`,
            },
            {
                title: "How big are the classess?",
                content: "Maximum capacity for our sessions is 6.",
            },
            {
                title: "What do you for cardio?",
                content: "Cardio should be in addition to a balanced strength training routine. We offer Conditioning sessions (aka cardio) on Wednesdays and Saturdays. It is a 30-minute workout incorporating modified Strongman equipment, animal walks and callisthenics.",
            },
            {
                title: "Do I need to bring anything?",
                content: "Please wear comfortable workout clothing, well supported athletic shoes and bring a water bottle.",
            },
            {
                title: "Do you have showers?",
                content: "Yes. We have showers available with soap and towels. We also have lockers available for personal belongings.",
            },
            {
                title: "When are your sessions?",
                content: "We offer sessions Monday-Friday at 7AM, 8AM, 9AM, 12PM, 5PM, 6PM and 7PM. We also have sessions Saturday at 8AM and 9AM.",
            },
            {
                title: "Do you offer Nutrition?",
                content: "Yes! Our Coaches are certified to provide Personlized Nutrition Guidance and Body Composition Assessments. We have both private and group nutritions available.",
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