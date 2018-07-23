import { getNames } from "./getNames";

describe('getNames',() => {
it('should contain name',() => {
 const result = getNames();
 expect(result).toContain('jeevitha');
 expect(result).toContain('asha');
 expect(result).toContain('jemima');
 expect(result).toContain('pavithra');
});
});