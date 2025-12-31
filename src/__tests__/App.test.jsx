import { render, screen } from "@testing-library/react";
import App from "../App";
import {describe, it, expect} from "@jest/globals"

describe("App",()=>{
    it("renders Hello There",()=>{
        render(<App/>)
        const helloElement = screen.getByText(/Hello There/i);
        expect(helloElement).toBeInTheDocument();
    })
})