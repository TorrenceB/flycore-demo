import { Goal } from "@/app/types";

const customerGoals: Goal[] = [
    {
        id: "gl01xk92",
        customerId: "1",
        type: "milestone",
        date: new Date("2024-04-01T09:00:00"),
        title: "Earn Private Pilot License",
        content: "Complete all FAA requirements and pass the PPL checkride on the first attempt. Primary long-term goal that initiated enrollment. Target completion by end of 2024."
    },
    {
        id: "gl02pt38",
        customerId: "1",
        type: "milestone",
        date: new Date("2024-04-01T09:00:00"),
        title: "Pass FAA Written Exam",
        content: "Score 80% or higher on the FAA Private Pilot Knowledge Test. Currently working through Sporty's ground school modules. Targeting an exam date by late summer 2024."
    },
    {
        id: "gl03lz71",
        customerId: "1",
        type: "skill",
        date: new Date("2024-04-17T09:30:00"),
        title: "Master Rudder Coordination",
        content: "Identified during Lesson 1 as an area needing focused attention. Goal is to demonstrate consistent rudder coordination through all maneuvers without instructor prompting by Lesson 5."
    },
    {
        id: "gl04no54",
        customerId: "1",
        type: "milestone",
        date: new Date("2024-06-04T09:00:00"),
        title: "Complete Stall Training",
        content: "Achieve confident and instinctive recovery from both power-on and power-off stalls to ACS standards. Currently working through initial exposure — goal is to complete all stall training requirements within the next 3 lessons."
    },
    {
        id: "gl05qs19",
        customerId: "1",
        type: "milestone",
        date: new Date("2024-07-03T11:00:00"),
        title: "Complete First Solo Flight",
        content: "Successfully fly three full-stop landings in the traffic pattern without an instructor on board. Pre-solo stage check cleared as of July 3rd. Weather and scheduling permitting, targeting solo within the next two weeks."
    },
    {
        id: "gl06wb67",
        customerId: "1",
        type: "skill",
        date: new Date("2024-08-14T10:00:00"),
        title: "Build Cross-Country Navigation Confidence",
        content: "Develop independent flight planning and in-flight navigation skills for cross-country operations. Dual cross-country completed August 20th — noted tendency to fall behind the sectional on busy legs. Goal is to complete the solo cross-country with no navigation assistance from instructor."
    },
    {
        id: "gl07mc23",
        customerId: "1",
        type: "skill",
        date: new Date("2024-09-19T07:00:00"),
        title: "Complete Night Flight Requirements",
        content: "Log all FAA-required night flight hours including a night cross-country exceeding 100nm and 10 night takeoffs and full-stop landings at a towered airport. Night illusion recognition to be reviewed during debrief. Completed September 19th."
    },
    {
        id: "gl08yj45",
        customerId: "1",
        type: "milestone",
        date: new Date("2024-10-08T10:00:00"),
        title: "Checkride Preparation — Oral Exam Readiness",
        content: "Demonstrate confident, thorough responses across all ACS oral exam subject areas: weather interpretation, airspace, systems, regulations, and emergency procedures. Flagged weakness in engine-out procedures during October 8th call with Chuck Yeager — prioritized for ground review before the practical."
    },
    {
        id: "gl09ef90",
        customerId: "1",
        type: "milestone",
        date: new Date("2024-11-14T15:00:00"),
        title: "Earn Instrument Rating",
        content: "Following PPL certification, pursue and complete the FAA Instrument Rating add-on. Enrolled in IR program January 2025 with Bessie Coleman as primary instructor. Goal is to be checkride-ready by mid-2025."
    },
    {
        id: "gl10hz14",
        customerId: "1",
        type: "long-term",
        date: new Date("2024-12-03T11:00:00"),
        title: "Build toward Commercial Certificate",
        content: "Longer-term ambition expressed by Doug during his post-PPL check-in message. After completing the Instrument Rating, the goal is to accumulate the required flight hours and pursue a Commercial Pilot Certificate. No formal timeline set yet — to be revisited after IR checkride."
    }
];

export default customerGoals;