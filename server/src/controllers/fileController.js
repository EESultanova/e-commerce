const fs = require('fs');
const User = require('../models/user.model');
const Uuid = require('uuid');
const path = require('path');

async function uploadAvatar(req, res) {
    try {
        let file;
        if (!req.files) {
            res.send("File was not found");
            return;
        }
        file = req.files.file;
        const user = await User.findById(req.user.id);
        const avatarName = Uuid.v4() + '.jpg';
        file.mv(path.join(__dirname, `../../static`, avatarName))
        user.avatar = avatarName;
        await user.save();
        return res.json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                avatar: avatarName,
                role: user.role,
            }
        });
        // return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: 'Upload avatar error' });
    }
};

async function deleteAvatar(req, res) {
    try {
        const user = await User.findById(req.user.id);
        fs.unlinkSync(path.join(__dirname, `../../static`, user.avatar));
        user.avatar = null;
        await user.save();
        return res.json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                avatar: user.avatar,
                role: user.role,
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: 'Upload avatar error' });
    }

};

module.exports = {
    uploadAvatar,
    deleteAvatar,
}