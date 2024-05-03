import User from "./User"

const About = () => {

    return (
        <div>
        <div className="about">
            <h1>This is about the webpage that we have created </h1>

            <h2>This is a food ordering app that can filter data and search the item that is needed </h2>

            <img src="https://www.shutterstock.com/image-photo/table-food-top-view-260nw-467823860.jpg" />


            <h1>Just click to have great food </h1>
        </div>

        <div>
            <User  />
        </div>
        </div>
    )
}

export default About