/*
name->String
runPerMachine->Boolean
Enable->Boolean
Priority->String enum:["Low","Normal","High"]
 disableOnError->Boolean
 lastRun->Date
 Duration->Date
  nextRunIn->Date
cronExpression->Number    optional




 
*/


const mongoose = require("mongoose");
const moment = require("moment");

const sheduleTaskSchema = mongoose.Schema({

    scheduleName: {
        type: String,
        required: [true, "Please Enter the rule name"],
        minLength: [2, "Schedule name should have more than 2 characters"],
        maxLength: [30, "Schedule name cannot exceed 30 characters"],
        trim: true,
    },
    runPerMachine: {
        type: Boolean,
        required: [true, "Please set the run per machine"],
        trim: true,
        default: false
    },
    schedule: {
        type: Boolean,
        required: [true, "Please set the schedule"],
        trim: true,
        default: false
    },
    priority: {
        type: String,
        required: [true, "Please Select the priority of the schedule"],
        enum: ["Low", "Normal", "High"],
        trim: true,
    },
    disableOnError: {
        type: Boolean,
        required: [true, "Please set the disable on error"],
        trim: true,
        default: false
    },
    lastRunDate: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: String,
        required: [true, "Please set the duration of the task"],
        trim: true,
    },
    nextRunIn: {
        type: String,
        required: [true, "Please set the schedule to run in the next"],
        trim: true,
    },
    cronExpression: {
        type: Date,
        // required: [true, "Please set the cron expression"],
        trim: true,
    },

    sheduleTaskUpdateOn: {
        type: Date,
        default: Date.now,
    },
    sheduleTaskCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("sheduleTask", sheduleTaskSchema);
// const sheduleTask = mongoose.model("sheduleTask", sheduleTaskSchema);

// const duration = moment().format("HH:mm:ss");
// const nextRunIn = moment().format("HH:mm:ss");
// const newSheduleTask = new sheduleTask({ scheduleName, runPerMachine: runPerMachine, schedule: schedule, priority: priority, disableOnError: disableOnError, lastRunDate: lastRunDate, task_duration: duration, nextRunIn: nextRunIn });
// newSheduleTask.save();