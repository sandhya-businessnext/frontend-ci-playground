import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App",()=>{
    it("renders Hello There",()=>{
        render(<App/>)
        const helloElement = screen.getByText(/Hello There/i);
        expect(helloElement).toBeInTheDocument();
    })
})