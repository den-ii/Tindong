// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    setMatchStatus(bool){
        this.hasBeenSwiped = bool;
        this.hasBeenLiked = true;
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return ` <img class="avatar" src="${avatar}">
        <img src="images/badge-like.png" id="like" class="badge">
        <img src="images/badge-nope.png" id="nope" class="badge">

        <div class="about">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
        </div>`
    }
}
export default Dog
