/*

	Given a column title as appear in an Excel sheet, 
	return its corresponding column number.

	For example:

	    A -> 1
	    B -> 2
	    C -> 3
	    ...
	    Z -> 26
	    AA -> 27
	    AB -> 28

*/
public class Solution {
    public int titleToNumber(String s) {
        int ret = 0;
        for (int i=1; i <= s.length(); i++) {
            int posvalue = s.charAt(s.length()-i) - 'A' + 1;
            ret = ret + (int)Math.pow(26, i-1) * posvalue;
        }
        return ret;
    }
}
