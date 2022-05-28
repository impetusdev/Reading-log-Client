import { updateTime } from "./helper";
import {expect} from "chai";


describe("Check if the update time works with decimal points", () => {
    it("returns the added value", () => {
        expect(updateTime(1, 1)).to.equal(2);
    })
})