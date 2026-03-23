import type { Reminder } from "@/app/types"

const reminders: Reminder[] = [
    {
        id: "rm01",
        customerId: "1",
        severity: "info",
        title: "IFR Cross-Country Debrief Pending",
        message: "Doug completed his IFR cross-country on March 12th. Bessie Coleman has not yet logged a formal debrief note. Follow up to ensure the session is documented before the next lesson."
    },
    {
        id: "rm02",
        customerId: "1",
        severity: "warning",
        title: "Instrument Rating Quote Expiring Soon",
        message: "The IR program quote issued on December 18th, 2024 was valid for 60 days and has since expired. If pricing has changed, issue an updated quote and confirm Doug's current rate is locked in."
    },
    {
        id: "rm03",
        customerId: "1",
        severity: "success",
        title: "PPL Milestone — One Year Anniversary Approaching",
        message: "Doug began his training journey on April 1st, 2024. His one-year enrollment anniversary is coming up. Consider sending a congratulatory note recognizing his progress from new student to active IR candidate."
    },
    {
        id: "rm04",
        customerId: "1",
        severity: "warning",
        title: "Partial-Panel Weakness Flagged",
        message: "Bessie Coleman noted in the February 11th debrief that Doug tends to fixate on the glideslope needle and needs additional partial-panel work. Confirm this has been addressed before scheduling the next IFR stage check."
    },
    {
        id: "rm05",
        customerId: "1",
        severity: "info",
        title: "Commercial Certificate Interest Logged",
        message: "Doug expressed long-term interest in pursuing a Commercial Pilot Certificate after completing his IR. No formal timeline has been set. Consider introducing the CPL program overview once the IR checkride is scheduled."
    }
];

export default reminders;