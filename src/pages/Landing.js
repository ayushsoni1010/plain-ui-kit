import Input from "../components/Input";

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero-section content-center">
                <h1 style={{
                    fontSize: '46px',
                    width: '26ch',
                    marginTop: '2.4em'
                }}>Plain UI Kit is a concept design system, inspired from Figma</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1.4em',
                    marginTop: '2em'
                }}>
                    <Input placeholder="This is just a random email input" type="email" size="small"
                    />
                    <button className="button-solid">Join Now! Idk why</button>
                </div>
            </div>
        </div>
    )
}