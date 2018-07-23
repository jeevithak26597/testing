import { getNames } from "./getNames";

describe('getNames',() => {
it('should contain foreign currency',() => {
 const result = getNames();
 expect(result).toContain('jeevitha');
 expect(result).toContain('asha');
 expect(result).toContain('jemima');
 expect(result).toContain('pavithra');
});
});