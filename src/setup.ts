import '../assets/Logo.png'

export async function setup(ctx: Modding.ModContext) {
    ctx.patch(Character, 'isImmuneTo').replace(function (original: (attacker: Character) => boolean, attacker: Character): boolean {
        // Explicitly removed all combat type immunity checks. May become outdated, if existing logic of method were to change
        // NOTE: Had to be done here, as `CharacterModifierTable.getImmunity(attackType)` unfortunately does not include `otherStyleImmunity`
        return this.damageType.immuneTo.has(attacker.damageType);
    });
}