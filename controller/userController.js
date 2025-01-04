import UserModel from '../model/usermodel.js';
 
export const create = async (req, res) => {
    try {
        const { email } = req.body;
 
        const userExist = await UserModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
 
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(200).json({ savedUser });
    } catch (err) {
        res.status(500).json({ error: err.message || "Internal server error" });
    }
};
 
export const fetch = async (req, res) => {
    try {
        const {id} = req.params;

        const users = await UserModel.findById(id);
        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message || "Internal server error" });
    }
};
 
export const update = async (req, res) => {
    try {
        const { id } = req.params;
 
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message || "Internal server error" });
    }
}; 

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
 
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message || "Internal server error" });
    }
};
