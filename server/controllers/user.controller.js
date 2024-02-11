export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id
    } catch (error) {
        console.error("Error in getUsersForSidebar contoller: ",error.message);
        res.status(500).json({error: "Internal server error"})
    }
}