/**
 * Created by haggk on 11/09/2016.
 */

const complement = {C:'G', G:'C', A:'U',T:'A'};
export default () =>
({ toRna: dna => [...dna].map(nuc => complement[nuc]).join('')})
