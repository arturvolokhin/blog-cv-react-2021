const UserEducation = () => {
    return (
        <section className="section education">
            <h2 className="subtitle">Education</h2>
            <ul className="education__list">
                <li className="education__item">
                    <p className="education__date">10.11.2020 - 09.08.2021:</p>
                    <p className="education__name">Coding School TeachMeSkills</p>
                    <p className="education__specialization">Front-end developer</p>
                </li>
                <li className="education__item">
                    <p className="education__date">2018-2023:</p>
                    <p className="education__name">Belarussian State Agrarian Technical University</p>
                    <p className="education__specialization">Economist-organizer</p>
                </li>
                <li className="education__item">
                    <p className="education__date">2016-2017:</p>
                    <p className="education__name">Sochi Trade Technology College</p>
                    <p className="education__specialization">Cook, Pastry chef</p>
                </li>
            </ul>
        </section>
    );
};

export default UserEducation;
