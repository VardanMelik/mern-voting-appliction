const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }]
})

userSchema.pre('save', async(next) => {
    try {
        if (!this.isModified('password')) {
            return next()
        }
        let hashed = await bcryptjs.hash(this.password, 10)
        this.password = hashed
        return next()
    } catch (err) {
        return next(err)
    }
})

userSchema.methods.comparePassword = async(attempt, next) => {
    try {
        return await bcryptjs.compare(attempt, this.password)
    } catch (err) {
        return next(err)
    }
}

module.exports = mongoose.model('User', userSchema)