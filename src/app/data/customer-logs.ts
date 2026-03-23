import type { CustomerLog } from "../types";

const customerLogs: CustomerLog[] = [
    {
        id: "xk92ma1b",
        customerId: "1",
        date: new Date("2024-02-10T09:00:00"),
        type: "customer-update",
        title: "New Student Inquiry",
        author: "Chuck Yeager",
        message: "Received inquiry from prospective student interested in pursuing a Private Pilot License. Initial profile created. Status set to New Inquiry. Assigned to my roster for follow-up."
    },
    {
        id: "pt38cw2d",
        customerId: "1",
        date: new Date("2024-02-13T10:30:00"),
        type: "call",
        title: "Introductory Call",
        author: "Chuck Yeager",
        message: "Spoke with student by phone for about 20 minutes. Discussed their background — no prior flight experience, but a longtime aviation enthusiast. Walked through our PPL curriculum, estimated timeline of 6–8 months, and pricing. Student is enthusiastic and has no scheduling concerns."
    },
    {
        id: "lz71rv3e",
        customerId: "1",
        date: new Date("2024-02-16T14:00:00"),
        type: "email",
        title: "Program Brochure Sent",
        author: "Chuck Yeager",
        message: "Sent student the PPL program overview, syllabus outline, and FAA medical certificate requirements. Recommended they schedule a Class 3 AME exam before booking the discovery flight. Included a link to the FAA physician locator."
    },
    {
        id: "no54ej4f",
        customerId: "1",
        date: new Date("2024-02-28T11:00:00"),
        type: "note",
        title: "Medical Certificate Pending",
        author: "Chuck Yeager",
        message: "Student confirmed they have a Class 3 AME appointment scheduled for March 6th. Advised them to bring their driver's license and any relevant medical history. Will follow up once they receive clearance before booking the discovery flight."
    },
    {
        id: "qs19bk5g",
        customerId: "1",
        date: new Date("2024-03-08T09:30:00"),
        type: "customer-update",
        title: "Medical Clearance Confirmed",
        author: "Chuck Yeager",
        message: "Student called to confirm Class 3 medical certificate issued with no limitations. Status updated from New Inquiry to Prospect Contacted. Cleared to begin flight training scheduling."
    },
    {
        id: "wb67dp6h",
        customerId: "1",
        date: new Date("2024-03-12T13:00:00"),
        type: "quote",
        title: "Discovery Flight Quote Issued",
        author: "Amelia Earhart",
        message: "Issued quote for discovery flight package — includes 1 hour of dual instruction in the Cessna 172, a post-flight debrief, and credit toward enrollment if student continues. Quote valid for 30 days."
    },
    {
        id: "mc23tf7i",
        customerId: "1",
        date: new Date("2024-03-15T10:00:00"),
        type: "reservation",
        title: "Discovery Flight Booked",
        author: "Amelia Earhart",
        message: "Discovery flight scheduled for March 22nd at 9:00 AM. Aircraft: Cessna 172 N4521X. Instructor assigned: Amelia Earhart. Weather hold policy and arrival instructions sent to student via email."
    },
    {
        id: "yj45qn8j",
        customerId: "1",
        date: new Date("2024-03-22T10:45:00"),
        type: "note",
        title: "Discovery Flight Debrief",
        author: "Amelia Earhart",
        message: "Student completed the discovery flight. Handled the controls during straight-and-level flight and a few gentle turns. Great spatial awareness for a first-timer and asked excellent questions throughout. Very motivated to enroll. Highly recommend moving forward."
    },
    {
        id: "hr91wm9k",
        customerId: "1",
        date: new Date("2024-03-26T14:30:00"),
        type: "quote",
        title: "Full PPL Program Quote",
        author: "Amelia Earhart",
        message: "Issued formal PPL program quote. Estimated 60–70 hours total flight time including dual instruction and supervised solo time. Ground school, written exam prep, and checkride prep included. Enrollment deposit locks in current rate."
    },
    {
        id: "dk58oz0l",
        customerId: "1",
        date: new Date("2024-04-01T09:00:00"),
        type: "customer-update",
        title: "Student Enrolled",
        author: "Amelia Earhart",
        message: "Student officially enrolled in the PPL program. Enrollment deposit received and logged. Status updated to Active Student. Assigned to Amelia Earhart as primary instructor. Onboarding email and scheduling portal access sent."
    },
    {
        id: "gv34sx1m",
        customerId: "1",
        date: new Date("2024-04-05T11:00:00"),
        type: "email",
        title: "Onboarding Materials Sent",
        author: "Amelia Earhart",
        message: "Sent student full onboarding packet: scheduling portal login, recommended study materials (Sporty's ground school and the FAA Pilot's Handbook of Aeronautical Knowledge), ground school start date, and a copy of our weather cancellation policy."
    },
    {
        id: "rx06lu2n",
        customerId: "1",
        date: new Date("2024-04-10T08:00:00"),
        type: "reservation",
        title: "Lesson 1 Scheduled",
        author: "Amelia Earhart",
        message: "First official training flight booked for April 17th at 8:00 AM. Cessna 172 N4521X reserved. Pre-lesson briefing materials on aircraft controls and the four fundamentals emailed to student."
    },
    {
        id: "ij82ke3o",
        customerId: "1",
        date: new Date("2024-04-17T09:30:00"),
        type: "note",
        title: "Lesson 1 — Four Fundamentals",
        author: "Amelia Earhart",
        message: "Covered straight-and-level flight, climbs, descents, and turns. Student is smooth on the yoke but tends to over-correct on the rudder during roll-out. Assigned rudder coordination exercises for next session. Logbook updated: 1.1 hours dual."
    },
    {
        id: "sq47cp4p",
        customerId: "1",
        date: new Date("2024-05-02T10:00:00"),
        type: "call",
        title: "Progress Check-In",
        author: "Amelia Earhart",
        message: "Called student after their fourth lesson to check in on progress and motivation. Rudder coordination has improved noticeably. Student has been keeping up with ground school modules and is about halfway through. No scheduling concerns. Very positive attitude."
    },
    {
        id: "ew93bv5q",
        customerId: "1",
        date: new Date("2024-05-20T14:00:00"),
        type: "note",
        title: "Ground School Milestone — Modules 1–4 Complete",
        author: "Neil Armstrong",
        message: "Covered student's progress in ground school during today's pre-flight brief. Modules 1–4 complete: aerodynamics, aircraft systems, weather theory, and navigation fundamentals. Quiz average sitting at 84%. Recommended supplemental reading on VOR navigation before next session."
    },
    {
        id: "ao16nt6r",
        customerId: "1",
        date: new Date("2024-06-04T09:00:00"),
        type: "note",
        title: "Lesson 9 — Slow Flight & Stalls",
        author: "Amelia Earhart",
        message: "Introduced slow flight and power-on/power-off stall recognition and recovery. Student initially tensed up on stall break but recovered correctly after the second attempt. Good overall instincts. Will revisit at the start of next session before moving to ground reference maneuvers."
    },
    {
        id: "bt72gf7s",
        customerId: "1",
        date: new Date("2024-06-18T08:30:00"),
        type: "message",
        title: "Student Portal Message — Reschedule Request",
        author: "Amelia Earhart",
        message: "Student messaged through the portal requesting to move their June 22nd lesson due to a work conflict. Rescheduled to June 26th at 7:00 AM. Aircraft reservation updated accordingly."
    },
    {
        id: "fd59jh8t",
        customerId: "1",
        date: new Date("2024-07-03T11:00:00"),
        type: "note",
        title: "Pre-Solo Stage Check",
        author: "Neil Armstrong",
        message: "Conducted a pre-solo stage check per our school's standardized curriculum. Evaluated stalls, slow flight, emergency procedures, and pattern work. Student performed all tasks to ACS standards. Cleared for solo endorsement. Paperwork signed and filed."
    },
    {
        id: "up31mq9u",
        customerId: "1",
        date: new Date("2024-07-10T07:45:00"),
        type: "customer-update",
        title: "First Solo Flight Completed",
        author: "Amelia Earhart",
        message: "Student completed their first solo flight today — three full-stop landings in the pattern, all within acceptable parameters. Shirt-cutting ceremony held post-flight. A big milestone. Status updated to Active Student — Post-Solo. Logbook updated: 0.8 hours solo."
    },
    {
        id: "zc88yo0v",
        customerId: "1",
        date: new Date("2024-07-25T13:00:00"),
        type: "email",
        title: "Written Exam Prep Resources",
        author: "Amelia Earhart",
        message: "Emailed student a curated list of FAA written exam practice tests and recommended they use the Sporty's Study Buddy app for daily review. With ground school modules nearing completion, advised them to target an exam date within the next 4–6 weeks."
    },
    {
        id: "ni64pw1w",
        customerId: "1",
        date: new Date("2024-08-14T10:00:00"),
        type: "reservation",
        title: "Solo Cross-Country Prep Flight",
        author: "Amelia Earhart",
        message: "Dual cross-country navigation flight scheduled for August 20th. Route: KPVD → KORH → KBOS and return. Student will handle all navigation, flight planning, and radio communications. Preflight planning review booked for the evening prior."
    },
    {
        id: "vh27aq2x",
        customerId: "1",
        date: new Date("2024-08-20T14:30:00"),
        type: "note",
        title: "Dual Cross-Country Debrief",
        author: "Amelia Earhart",
        message: "Cross-country went well overall. Student nailed the KORH approach but got slightly behind on the sectional during the KBOS leg — recovered quickly using pilotage. Radio communications were confident and professional throughout. Approved for supervised solo cross-country next."
    },
    {
        id: "kl43rs3y",
        customerId: "1",
        date: new Date("2024-09-05T09:00:00"),
        type: "customer-update",
        title: "Written Exam Passed",
        author: "Neil Armstrong",
        message: "Student passed the FAA Private Pilot written exam with a score of 90%. Exam result and endorsement logged in training file. Status updated to reflect written exam completion. Verbal debrief on missed questions conducted — all were weather-related, flagged for checkride prep."
    },
    {
        id: "je05ct4z",
        customerId: "1",
        date: new Date("2024-09-19T07:00:00"),
        type: "note",
        title: "Night Flight Requirements Complete",
        author: "Amelia Earhart",
        message: "Student completed all required night flight hours tonight: 3 hours total including a cross-country leg exceeding 100nm and 10 takeoff and full-stop landings at a towered airport. Student was composed and confident. Illusion recognition and night VFR planning reviewed during debrief."
    },
    {
        id: "tm82bu5a",
        customerId: "1",
        date: new Date("2024-10-08T10:00:00"),
        type: "call",
        title: "Checkride Prep Discussion",
        author: "Chuck Yeager",
        message: "Called student to go over the checkride process from start to finish. Discussed the oral exam format, common DPE focus areas, required documents, and the ACS standards for each maneuver. Student has a few questions about engine-out procedures — flagged for the next ground session."
    },
    {
        id: "ob19gv6b",
        customerId: "1",
        date: new Date("2024-10-22T14:00:00"),
        type: "email",
        title: "Checkride Document Checklist Sent",
        author: "Amelia Earhart",
        message: "Emailed student the complete checkride document checklist: government-issued ID, student pilot certificate, medical certificate, logbook with all endorsements, completed IACRA application, current sectional and airport diagram, aircraft maintenance records, and weight & balance. Advised them to have everything ready at least a week in advance."
    },
    {
        id: "cw56hu7c",
        customerId: "1",
        date: new Date("2024-11-01T09:30:00"),
        type: "note",
        title: "Final Stage Check — Checkride Ready",
        author: "Neil Armstrong",
        message: "Completed final pre-checkride stage check. Simulated oral exam covering weather, airspace, systems, and regulations — student answered all questions to standard. All required maneuvers flown to ACS minimums. Endorsement signed for the checkride. Student is ready."
    },
    {
        id: "ef90jx8d",
        customerId: "1",
        date: new Date("2024-11-07T08:00:00"),
        type: "reservation",
        title: "Checkride Scheduled",
        author: "Amelia Earhart",
        message: "Checkride confirmed with DPE for November 14th at 9:00 AM. Aircraft reserved: N4521X. All endorsements on file. Student briefed on DPE's expectations and advised to get a full weather briefing the morning of."
    },
    {
        id: "gy37kz9e",
        customerId: "1",
        date: new Date("2024-11-14T15:00:00"),
        type: "customer-update",
        title: "Private Pilot Certificate Earned",
        author: "Amelia Earhart",
        message: "Student passed their Private Pilot checkride on the first attempt. Oral exam lasted approximately 90 minutes with focus on weather decision-making and airspace. Practical covered slow flight, stalls, steep turns, emergency descent, and three patterns. DPE noted student's professionalism and calm demeanor. Congratulations! Status updated to PPL Certified."
    },
    {
        id: "hz14lw0f",
        customerId: "1",
        date: new Date("2024-12-03T11:00:00"),
        type: "message",
        title: "Instrument Rating Inquiry",
        author: "Amelia Earhart",
        message: "Student reached out through the portal expressing strong interest in pursuing an Instrument Rating. Asked about IFR curriculum, simulator hours, timeline, and whether an alumni discount applies. Responded with general overview and flagged for a formal quote."
    },
    {
        id: "px63mw1g",
        customerId: "1",
        date: new Date("2024-12-18T13:00:00"),
        type: "quote",
        title: "Instrument Rating Program Quote",
        author: "Bessie Coleman",
        message: "Issued formal Instrument Rating add-on quote. Includes 50 hours of simulated and actual IMC, IFR cross-country requirements, approach proficiency, and checkride prep. Alumni loyalty discount of 10% applied. Quote valid for 60 days."
    },
    {
        id: "wq81ns2h",
        customerId: "1",
        date: new Date("2025-01-06T09:00:00"),
        type: "customer-update",
        title: "Instrument Rating Program Enrolled",
        author: "Bessie Coleman",
        message: "Student confirmed enrollment in the Instrument Rating program. Deposit received. Assigned to Bessie Coleman as primary IFR instructor. Status updated to Active — Advanced Training. Scheduling portal updated with IFR lesson blocks."
    },
    {
        id: "ar52ot3i",
        customerId: "1",
        date: new Date("2025-02-11T14:00:00"),
        type: "call",
        title: "IFR Simulator Session Debrief",
        author: "Bessie Coleman",
        message: "Called to debrief after the student's third IFR simulator session. Holding pattern entries are improving — parallel and teardrop both correct. ILS approaches are solid. HSI scanning still needs work; student tends to fixate on the glideslope needle. Assigned additional partial-panel exercises before next sim block."
    },
    {
        id: "dk29vu4j",
        customerId: "1",
        date: new Date("2025-03-05T10:30:00"),
        type: "reservation",
        title: "IFR Cross-Country Flight Scheduled",
        author: "Bessie Coleman",
        message: "Long IFR cross-country booked for March 12th. Planned route includes two instrument approaches at alternate airports with different approach types (ILS and RNAV). Student to file the full IFR flight plan and obtain a full weather briefing independently as part of the exercise."
    },
    {
        id: "tn07cx5k",
        customerId: "1",
        date: new Date("2025-03-18T11:00:00"),
        type: "note",
        title: "IFR Cross-Country Complete",
        author: "Bessie Coleman",
        message: "IFR cross-country went excellently. Student self-filed correctly, briefed weather without prompting, and flew both approaches to minimums without assistance. ATC communications were clean and professional. The partial-panel work paid off — much more composed during an unexpected vacuum failure simulation en route. Solid flight."
    }
];

export default customerLogs;