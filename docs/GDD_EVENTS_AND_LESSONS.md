# Bay'at al-Gharb / Western Allegiance
## Events & Educational Content Supplement v1.0

**Companion to:** [GAME_DESIGN_DOCUMENT.md](./GAME_DESIGN_DOCUMENT.md)  
**Last updated:** 5 August 2026

---

## Citation Integrity Rules

### Purpose

This game treats Islamic scripture and hadith as **non-negotiable authenticity boundaries**. Educational content must not invent religious evidence.

### Rules

| Rule | Requirement |
|------|-------------|
| **R1** | No fabricated Qur'an verses. Arabic text may display only from a **verified licensed database** with `surah:ayah` ID. |
| **R2** | No fabricated hadith. Citations require collection ID + number (e.g., `Sahih_Bukhari:1234`) from approved corpora. |
| **R3** | Paraphrase of scripture permitted only with `PARAPHRASE: true` flag and plain-language dalil note. |
| **R4** | Scholarly opinions cite named modern or classical works; early-8th-century western Maliki corpus is **[DISPUTED]** at game date — always flagged. |
| **R5** | Fictional chronicle voice tagged `[FICTIONAL CHRONICLE]` — never mixed with scriptural styling. |
| **R6** | Fatwa in-game outcomes are **game abstractions**; UI states: "This ruling reflects narrative design informed by scholarship, not live religious authority." |
| **R7** | External review gate before ship: zero events with unverified `quran_*` or `hadith_*` IDs. |

### Approved Reference Bindings (production)

- Qur'an text API: project-licensed corpus (exact vendor TBD in legal)
- Hadith: sunnah.com API IDs or equivalent verified index
- Encyclopedia: *Encyclopaedia of Islam* (2nd ed.) headwords where cited
- History: Donner (2010), Kennedy (2001), Collins (2012) — bibliographies in lesson entries

---

# Part I: Forty Complete Events

**Notation:**  
- **[V]** = Verified historical context  
- **[D]** = Disputed / sparse evidence  
- **[F]** = Fictional narrative element  

Each event includes **4–8 choices**, **delayed hooks**, and **chronicle notes**.

---

## Event 01: The Stones of Wadi al-Hajar

| Field | Value |
|-------|-------|
| **ID** | `evt_wadi_legacy` |
| **Date** | 8 Rajab 98 AH / 27 June 717 CE |
| **Location** | `prov_osuna` (Wadi al-Hajar battlefield memorial) |
| **Theme** | Unfinished conquest |

### Characters

Yahya, Umar al-Ghazi, Tariq al-Zanata, Yusuf the Scribe, Visigothic prisoners (background)

### Context

Three weeks after the fictional **Battle of Wadi al-Hajar** [F], commanders demand clarity: pursue north toward Mérida or consolidate the south. Memorial stones are erected; soldiers whisper the governor-designate's death [F] was no accident.

### Known / Uncertain Facts

| Fact | Tag |
|------|-----|
| Early Umayyad armies pursued consolidation after initial gains in Iberia | [V] |
| Wadi al-Hajar battle | [F] |
| Berber allies' post-battle expectations for land/grazing | [D] |

### Choices

1. **Pledge a summer campaign toward Mérida** — `military` +prestige; −grain; hook `hook_merida_push_16w`
2. **Declare a year of consolidation** — +Berber favor; −Qaysi favor; unrest −5 south
3. **Distribute captured arms to Qaysi clients only** — +Qaysi; −Berber; conspiracy seed `cosp_berber_slight`
4. **Commission Yusuf to record casualties publicly** — +legitimacy; +scholar favor; −prestige (reveals losses)
5. **Hold victory feast in Seville** — +morale; −80 silver; −food reserves
6. **Send Tariq to negotiate grazing rights now** — prevents `evt_zanata_grazing` 8 weeks early

### Hooks

- `hook_merida_push_16w` → enables Merida siege arc; triggers `evt_merida_siege` if not started
- `cosp_berber_slight` → +15 Berber conspiracy if favor < 30

### Chronicle Notes

> "At Wadi al-Hajar the amir's banner stood where imperial patent did not. The dead were counted; the living demanded a direction."

---

## Event 02: Gates of Balansiya

| Field | Value |
|-------|-------|
| **ID** | `evt_valencia_surrender` |
| **Date** | 15 Safar 99 AH / ~October 717 CE |
| **Location** | `prov_valencia` / `city_valencia` |
| **Theme** | City surrender |

### Characters

Yahya, Abd al-Wahid, Valencia council elder (NPC: `chr_balansiya_elder`), Ibn Hud (distant)

### Context

Balansiya's council offers surrender if sack is forbidden and jizya terms remain. Ibn Hud urges a punitive example to intimidate Cordoba.

### Known / Uncertain Facts

| Fact | Tag |
|------|-----|
| Valencia was a major early medieval Iberian city | [V] |
| Specific 717 surrender terms | [F] |
| Jizya as dhimmi levy in conquered territories | [V] concept; rates [D] |

### Choices

1. **Accept full treaty with scholar witness** — treaty `treaty_balansiya_717`; see main GDD §57
2. **Accept but appoint harsh governor** — +tax; hook `hook_balansiya_unrest_20w`
3. **Reject; begin siege** — triggers extended siege chain; −legitimacy
4. **Demand conversion or exile of elite families** — +prestige Qaysi; −dhimmi; fatwa `discouraged`
5. **Offer Ibn Hud the governorship if he guarantees order** — +Yemeni; −Qaysi; risk `evt_popular_general`
6. **Temporary amnesty for rebels; standard kharaj** — +legitimacy; −immediate silver
7. **Withdraw to threaten later** — preserves army; Valencia reinforces (+fort)

### Hooks

- `hook_balansiya_unrest_20w` → `evt_market_riot` if governor corruption > 40

### Chronicle Notes

> "Balansiya opened before the ladders touched stone. The amir's word became the city's wall."

---

## Event 03: Walls of Marida

| Field | Value |
|-------|-------|
| **ID** | `evt_merida_siege` |
| **Date** | Jumada I 100 AH / ~January 718 CE |
| **Location** | `prov_merida` |
| **Theme** | Siege |

### Characters

Yahya, Umar, Roderic (defender), army surgeons, Fatima (via messenger)

### Context

Mérida's Visigothic garrison holds. Supply lines stretch through Beja. Disease appears in archer camps.

### Known / Uncertain Facts

| Fact | Tag |
|------|-----|
| Mérida (Emerita Augusta) was a major Visigothic administrative center | [V] |
| 718 siege timeline | [F] |

### Choices

1. **Maintain strict blockade** — slow win; grain cost high
2. **Assault the eastern gate** — fast; 20% casualty risk
3. **Bribe a gate captain** — intelligence check; silver 150
4. **Request fatwa on catapult use near churches** — legal delay 2 weeks; compliance +10
5. **Rotate Umar out for discipline** — −popularity Umar; +army discipline
6. **Offer Roderic safe conduct if he yields** — captive ruler arc `evt_roderic_captive`
7. **Lift siege; mark unfinished conquest permanent** — −prestige; flag remains
8. **Summon Berber sappers** — +siege speed; −Berber payment due hook

### Hooks

- Success → clears `unfinished_conquest_merida`
- Failure assault → `evt_qays_yemen_clash` chance 40%

### Chronicle Notes

> "The walls of Marida drank time. The amir learned that victory without grain is only a longer defeat."

---

## Event 04: Umar Rides Anyway

| Field | Value |
|-------|-------|
| **ID** | `evt_umar_disobey` |
| **Date** | Sha'ban 100 AH / ~April 718 CE |
| **Location** | `prov_beja` |
| **Theme** | Commander disobedience |

### Characters

Yahya (distant order), Umar al-Ghazi, Hassan al-Farisi, Ibn Hud

### Context

Yahya orders Umar to hold Beja supply lines. Umar raids a Visigothic manor for horses without authorization.

### Choices

1. **Public reprimand; retain command** — −discipline; +Umar loyalty paradox +5
2. **Strip command; assign to Ishbiliya** — +law; triggers `evt_popular_general`
3. **Quiet approval; take the horses** — +cavalry; legal −10; memory `mem_unauthorized_raid`
4. **Court-martial under Abd al-Wahid** — delays army 2 weeks; precedent set
5. **Order restitution to dhimmi owner** — if owner Muslim/dhimmi mix; complex favor shifts
6. **Use raid to justify Merida push** — +prestige; scholar criticism hook

### Hooks

- `mem_unauthorized_raid` → dhimmi unrest if repeated

### Chronicle Notes

> "Umar rode before the seal dried. The amir chose between law and momentum."

---

## Event 05: Shortened Measures

| Field | Value |
|-------|-------|
| **ID** | `evt_spoils_theft` |
| **Date** | Ramadan 100 AH / ~May 718 CE |
| **Location** | `prov_ishbiliya` (distribution yard) |
| **Theme** | Stolen spoils |

### Characters

Yusuf, Umar, soldiers, Fatima

### Context

Soldiers accuse officers of skimming spoils before the fifth reaches the treasury.

### Known / Uncertain Facts

| Fact | Tag |
|------|-----|
| Ghanima (war spoils) rules required defined shares in Islamic law discourse | [V] concept |
| Specific 8th-c. Andalusi enforcement | [D] |

### Choices

1. **Audit under Yusuf; public hanging of junior officer** — deterrence; −morale
2. **Audit; restitution only** — +legitimacy; cost 60 silver
3. **Deny theft; suppress rumor** — short calm; conspiracy +20
4. **Ask Fatima for fatwa on audit scope** — legal path; 1 week delay
5. **Blame Umar's camp** — political; faction clash
6. **Increase soldiers' share this once** — +morale; treasury −40
7. **Appoint Berber overseer for fairness** — +Berber; −Qaysi

### Hooks

- Unresolved → `evt_empty_chest` threshold lowered

### Chronicle Notes

> "The scales in the yard lied. Trust weighed more than silver."

---

## Event 06: Songs of Umar

| Field | Value |
|-------|-------|
| **ID** | `evt_popular_general` |
| **Date** | Shawwal 100 AH / ~July 718 CE |
| **Location** | `prov_carmona` |
| **Theme** | Rival popularity |

### Characters

Umar, Yahya, Ibn Hud, Nasir (palace guard)

### Context

Poets praise Umar in Carmona markets. Ibn Hud warns the amir: "A popular sword is a second throne."

### Choices

1. **Promote Umar to second army** — reduces coup risk from him; increases if incompetent
2. **Recall Umar to palace advisory role** — −military efficiency; monitors him
3. **Ignore** — conspiracy `cosp_umar_cult` +25
4. **Sponsor rival poet for Yahya** — prestige minigame; silver 30
5. **Assign Umar to distant Lorca garrison** — −popularity there; +Ishbiliya control
6. **Investigate songs as foreign paid** — intelligence; may be false flag
7. **Public bayʿah renewal excluding Umar** — bold; −Umar loyalty 30

### Hooks

- `cosp_umar_cult` → coup branch if Umar loyalty < 20

### Chronicle Notes

> "Carmona sang Umar's name. The amir heard harmony or threat by choice."

---

## Event 07: Camp Divided

| Field | Value |
|-------|-------|
| **ID** | `evt_qays_yemen_clash` |
| **Date** | Dhu al-Qi'dah 100 AH / ~August 718 CE |
| **Location** | Army camp between `prov_beja` and `prov_merida` |
| **Theme** | Army factional dispute |

### Characters

Umar (Qaysi), Ibn Hud (Yemeni), Nasir, Tariq (mediator)

### Context

A brawl over parade order becomes a Qaysi–Yemeni standoff with drawn swords.

### Choices

1. **Side with Qaysi discipline** — +Qaysi; −Yemeni 20
2. **Side with Yemeni complaint** — inverse
3. **Flog both ringleaders** — neutral justice; −morale short
4. **Separate camps by faction** — efficiency −10%; clash −
5. **Dismiss Ibn Hud from campaign** — radical; coup risk
6. **Mediate via Tariq's oath** — Berber favor +; time lost
7. **Pay bonus to all** — silver 120; temporary peace
8. **Disband merged units; reorganize mixed** — long-term fix; 4 week delay

### Hooks

- −Yemeni 20 → accelerates `cosp_yemeni_coup`

### Chronicle Notes

> "The army nearly split before the enemy did. Tribal memory rode in every saddle."

---

## Event 08: The Empty Pay Chest

| Field | Value |
|-------|-------|
| **ID** | `evt_empty_chest` |
| **Date** | Muharram 101 AH / ~September 718 CE |
| **Location** | `prov_ishbiliya` |
| **Theme** | Unpaid troops |

### Characters

Yusuf, Umar, soldiers, Zaynab (loan offer)

### Context

Treasury below 100. Two months' partial pay owed. Mutiny whispers.

### Choices

1. **Pledge harvest levy** — hook `hook_pay_promise_12w`
2. **Emergency tax on merchants** — +silver; −merchants; riot risk
3. **Let officers loan from personal spoils** — +loyalty; corruption +5
4. **Disband auxiliaries** — army −20%; saves cash
5. **Zaynab's loan at 15% return** — debt hook
6. **Send for delayed Tanja convoy** — 6 week wait; event chain
7. **Fight mutiny leaders** — battle if morale low
8. **Sell crown horses** — cavalry recruitment malus 20 weeks

### Hooks

- `hook_pay_promise_12w` failure → `evt_qays_yemen_clash` auto

### Chronicle Notes

> "The chest rang hollow. An amir who cannot pay buys rebellion on credit."

---

## Event 09: Blade in the Courtyard

| Field | Value |
|-------|-------|
| **ID** | `evt_palace_blade` |
| **Date** | Rabi' I 101 AH / ~November 718 CE |
| **Location** | Seville palace |
| **Theme** | Assassination |

### Characters

Yahya, Jabir (suspect), Nasir, Hassan, Layla

### Context

Pre-dawn: an intruder is seized near the amir's chamber. Poison found on a blade.

### Choices

1. **Public trial with evidence** — legal; delay 2 weeks
2. **Secret execution of Jabir** — −outrage if innocent
3. **Expand Nasir's guard** — silver ongoing
4. **Hassan investigates Ibn Hud link** — intelligence 3 weeks
5. **Pardon if he names patron** — risky info
6. **House arrest for all foreign servants** — −merchant favor
7. **Prayer procession; show faith** — +piety perception; −security
8. **Fake death to flush conspirators** — high risk narrative branch

### Hooks

- Wrong execution → `evt_false_witness` mirror event

### Chronicle Notes

> "Steel glinted where prayers should have been. The palace became a court."

---

## Event 10: Layla's Letter

| Field | Value |
|-------|-------|
| **ID** | `evt_sister_letter` |
| **Date** | Rabi' II 101 AH / ~December 718 CE |
| **Location** | `prov_ishbiliya` |
| **Theme** | Palace conspiracy |

### Characters

Layla, Salim, Asma, Hassan, Yahya

### Context

Hassan intercepts Layla's letter to Salim mentioning "when the bayʿah weakens." Family or plot?

### Choices

1. **Confront Layla privately** — relationship test
2. **Arrest Salim preemptively** — family crisis `evt_mundhir_salim`
3. **Burn letter; monitor** — intelligence passive
4. **Marriage alliance to soothe Salim** — political
5. **Share letter with Umm Khalid** — court stability
6. **Publicly trust Salim with Carmona** — gamble
7. **Exile messenger only** — weak response
8. **Use letter as pretext to purge Yemeni clerks** — factional

### Hooks

- Salim arrest → brother rebellion path if favor < 0

### Chronicle Notes

> "Ink bound blood to ambition. The amir read threat in kinship."

---

## Event 11: Ledgers of Lorca

| Field | Value |
|-------|-------|
| **ID** | `evt_khalid_skim` |
| **Date** | Jumada II 101 AH / ~February 719 CE |
| **Location** | `prov_lorca` |
| **Theme** | Governor corruption |

### Characters

Khalid ibn Rumi (governor), Yusuf, Lorca miners, Yahya

### Context

Mining revenues reported down 30% while exports rise. Yusuf suspects Khalid skims before imperial fifth.

### Choices

1. **Recall and replace Khalid** — +honesty; −Yemeni if he's their client
2. **Audit in place** — 3 weeks; partial recovery
3. **Ignore for Yemeni favor** — corruption entrenched
4. **Promote Khalid if he pays lump sum** — silver now; legitimacy −
5. **Send Salim to co-govern** — family politics
6. **Public punishment as example** — deterrence
7. **Offer amnesty for confession** — recover 50% skim
8. **Privatize mine lease to merchants** — economic reform; unrest

### Hooks

- Ignored → `evt_merchant_blockade` linked

### Chronicle Notes

> "Lorca's silver walked in another man's shadow."

---

## Event 12: The False Witness

| Field | Value |
|-------|-------|
| **ID** | `evt_false_witness` |
| **Date** | Rajab 101 AH / ~March 719 CE |
| **Location** | Seville qadi court |
| **Theme** | False accusation |

### Characters

Abd al-Wahid, accused merchant, Ibn Hud accuser, Fatima

### Context

A Yemeni officer accuses a Jewish merchant of funding Visigothic spies. Evidence: one signed scrap.

### Choices

1. **Full evidentiary hearing** — delay; truth likely emerges
2. **Fine merchant preemptively** — fast injustice; dhimmi −25
3. **Dismiss as factional attack** — +dhimmi; −Yemeni
4. **Torture confession** — forbidden fatwa path; legal −20
5. **Ban accuser from court** — precedent
6. **Split fine between parties** — weak compromise
7. **Hassan investigates accuser** — may reveal Ibn Hud plot
8. **Refer to Fatima on witness standards** — lesson `lesson_shahada` unlock

### Hooks

- Wrongful fine → `evt_tanner_feud` chance

### Chronicle Notes

> "One scrap of ink nearly bought a life. The court learned the price of haste."

---

## Event 13: Ecija Refuses the Scribe

| Field | Value |
|-------|-------|
| **ID** | `evt_ecija_tax` |
| **Date** | Sha'ban 101 AH / ~April 719 CE |
| **Location** | `prov_ecija` |
| **Theme** | Tax revolt |

### Characters

Ecija notables, Yusuf's scribe, Umar (garrison), Yahya

### Context

New harvest assessment raises kharaj 12%. Farmers bar the scribe from villages.

### Choices

1. **Send Umar to collect by force** — unrest −; legitimacy −
2. **Negotiate assessment down 6%** — compromise
3. **Freeze taxes one season** — treasury pain
4. **Replace local assessor** — corruption probe
5. **Request fatwa on emergency rate** — legal track
6. **Grant cavalry fodder exemption instead** — targeted relief
7. **Arrest ring leaders** — spiral risk
8. **Appoint Salim governor with mandate to fix** — family bet

### Hooks

- Force collection → `evt_qays_yemen_clash` if garrison brutal

### Chronicle Notes

> "Ecija's fields fed horses and anger in equal measure."

---

## Event 14: Ship That Never Came

| Field | Value |
|-------|-------|
| **ID** | `evt_grain_ship` |
| **Date** | Ramadan 101 AH / ~May 719 CE |
| **Location** | `prov_cadiz` / `prov_tangier` link |
| **Theme** | Food shortage |

### Characters

Zaynab, Malaga port captain, Yusuf, Tariq

### Context

Expected grain convoy from Tanja fails. Cadiz reserves for 3 weeks only.

### Choices

1. **Ration cities strictly** — unrest +; army stable
2. **Priority army; starve cities** — army OK; riot `evt_market_riot`
3. **Buy at premium from Zaynab** — silver −200
4. **Raid Berber granaries** — fast; Berber −30
5. **Prayer for rain + public works** — morale; no food magic
6. **Send Tariq to escort next ship** — 4 week fix
7. **Reduce garrison sizes** — vulnerability
8. **Import from Valencia if controlled** — internal trade

### Hooks

- 3 weeks no fix → `evt_plague_carmona` risk doubles

### Chronicle Notes

> "The horizon stayed empty. Hunger became a policy question."

---

## Event 15: Fever in Carmona

| Field | Value |
|-------|-------|
| **ID** | `evt_plague_carmona` |
| **Date** | Shawwal 101 AH / ~July 719 CE |
| **Location** | `prov_carmona` |
| **Theme** | Plague |

### Characters

Army surgeons, Fatima, Salim (governor), Yahya

### Context

Unknown fever kills 8% of Carmona population in a month. Soldiers fear camp contagion.

### Known / Uncertain Facts

| Fact | Tag |
|------|-----|
| Epidemics occurred in medieval Iberia | [V] |
| Specific 719 pathogen | [F] |

### Choices

1. **Quarantine Carmona** — trade halt; spread −
2. **Prayer and charity expenditures** — +legitimacy; silver −50
3. **Flee court to Ecija** — capital panic
4. **Burn plague houses** — harsh; unrest
5. **Fatima: public health fatwa** — compliance lesson
6. **Recruit healthy migrants inward** — migration hook
7. **Abandon Carmona granary to save army** — food − long term
8. **Send Salim away from post** — family or blame?

### Hooks

- Quarantine failure → population −15%

### Chronicle Notes

> "Fever took the granary's children first. The amir weighed souls against supply."

---

## Event 16: Families Cross the Pass

| Field | Value |
|-------|-------|
| **ID** | `evt_berber_migration` |
| **Date** | Dhu al-Hijjah 101 AH / ~August 719 CE |
| **Location** | `prov_ronda` pass |
| **Theme** | Migration |

### Characters

Tariq al-Zanata, Ronda settlers, Yahya, merchants

### Context

Three hundred Berber families move south through Ronda seeking pasture after drought in hills.

### Choices

1. **Grant grazing in Beja** — +Berber; −local farmers
2. **Turn them back at spearpoint** — −Berber 25; migration halted
3. **Tax entry as settlers** — silver; resentment
4. **Distribute across provinces** — admin cost
5. **Integrate as auxiliary cavalry** — military boost; food cost
6. **Negotiate with Tariq for labor on fort walls** — build speed
7. **Ask scholars on rights of muhajirun** — lesson unlock
8. **Ignore; local violence likely** — triggers `evt_zanata_grazing`

### Hooks

- Back at spearpoint → `evt_granada_revolt` chance

### Chronicle Notes

> "Families crossed the pass with herds and memory. Borders were still being invented."

---

## Event 17: The Wine Accusation

| Field | Value |
|-------|-------|
| **ID** | `evt_dhimmi_wine` |
| **Date** | Muharram 102 AH / ~September 719 CE |
| **Location** | `prov_ishbiliya` |
| **Theme** | Religious dispute |

### Characters

Elias ibn Nuri, accuser imam (NPC), Fatima, Yahya

### Context

A Muslim trader accuses a Christian family of selling wine to soldiers. Elias claims trade license from old council.

### Choices

1. **Uphold dhimmi license; fine Muslim accuser if false** — rule of law
2. **Ban wine sales in Muslim quarters only** — compromise
3. **Confiscate Christian stock** — +piety perception; −dhimmi
4. **Refer to Abd al-Wahid** — standard court
5. **Fatima public ruling** — scholar visibility
6. **Expel Christian family** — harsh; migration
7. **Ignore; soldiers' morale** — discipline −
8. **License state monopoly on wine tax** — cynical revenue

### Hooks

- Confiscation → `evt_tanner_feud` adjacent unrest

### Chronicle Notes

> "A cup became a covenant. The amir judged communities, not only crimes."

---

## Event 18: Two Qadis, One Seat

| Field | Value |
|-------|-------|
| **ID** | `evt_two_qadis` |
| **Date** | Safar 102 AH / ~October 719 CE |
| **Location** | `prov_cordoba` / Seville |
| **Theme** | Legal disagreement |

### Characters

Abd al-Wahid, Cordoba-appointed qadi (NPC), Fatima, Nusayba

### Context

Cordoba's faction appoints a rival qadi. Two courts issue conflicting inheritance rulings.

### Choices

1. **Recognize Abd al-Wahid only** — +Seville scholars; −Cordoba
2. **Split jurisdictions by province** — federal compromise
3. **Recall Cordoba qadi by force** — military escalation
4. **Scholar council arbitration** — 4 week delay; lesson `lesson_qadi`
5. **Appoint Fatima as senior advisor without bench** — controversial
6. **Ignore Cordoba rulings** — legal chaos +5%
7. **Merge courts via marriage of families** — Nusayba link
8. **Request Damascus legal letter** — diplomacy; slow

### Hooks

- Chaos > 20% → random unjust fines events

### Chronicle Notes

> "Two benches, one ummah divided by politics. Law became terrain."

---

## Event 19: Market of Broken Stalls

| Field | Value |
|-------|-------|
| **ID** | `evt_market_riot` |
| **Date** | Rabi' I 102 AH / ~November 719 CE |
| **Location** | `city_seville` |
| **Theme** | Public disorder |

### Characters

Zaynab, Nasir, merchants, Yahya

### Context

Bread prices double after grain crisis. Stall owners overturn tax collectors.

### Choices

1. **Deploy Nasir's guard** — order; deaths possible
2. **Subsidize bread from treasury** — silver −100
3. **Hang hoarding merchant** — if proven; else riot grows
4. **Public bayʿah speech + promise** — promise memory
5. **Expel foreign traders** — xenophobia; trade −
6. **Lower market tax 1 year** — revenue −
7. **Zaynab mediates price cap** — +merchants
8. **Declare curfew until harvest** — unrest − activity

### Hooks

- Deaths → `evt_fatima_sermon` criticism

### Chronicle Notes

> "Stalls splintered in the square. Bread was politics made visible."

---

## Event 20: Blood in the Tanner's Quarter

| Field | Value |
|-------|-------|
| **ID** | `evt_tanner_feud` |
| **Date** | Rabi' II 102 AH / ~December 719 CE |
| **Location** | `prov_ishbiliya` (tanner's quarter) |
| **Theme** | Communal violence |

### Characters

Elias, Muslim leather guild, Abd al-Wahid, Fatima

### Context

Muslim and Christian tanners clash over pollution and guild privileges. Three dead.

### Choices

1. **Curfew and collective fine on quarter** — order; resentment
2. **Separate guild jurisdictions** — long-term fix
3. **Execute killers if identified** — deterrence
4. **Compensate families per sharia/dhimmi custom hybrid** — complex legal
5. **Relocate Christian tanners outside walls** — migration cost
6. **Fatima sermon on neighbor rights** — soft power
7. **Ignore internal guild matter** — violence repeats
8. **Appoint Elias as negotiator** — `evt_elias_admin` foreshadow

### Hooks

- Ignore → communal violence flag +1 province random

### Chronicle Notes

> "The tanners' quarter stank of blood as well as lime. Peace needed more than soldiers."

---

## Event 21: Oath on the Duero

| Field | Value |
|-------|-------|
| **ID** | `evt_broken_truce_franks` |
| **Date** | Jumada I 102 AH / ~January 720 CE |
| **Location** | `prov_duero` border |
| **Theme** | Broken treaty |

### Characters

Egilo (Frankish envoy), Umar, Yahya, Pelagius

### Context

A two-year truce with northern Franks ends. Frankish riders cross the Duero claiming provocation. Player previously promised no raids—or did they?

### Choices

1. **Honor truce; protest diplomatically** — +legitimacy; −prestige military
2. **Raid in retaliation** — breaks treaty; memory `mem_broken_duero_truce`
3. **Pay tribute to restore peace** — silver 180
4. **Fortify Zaragoza instead** — defensive
5. **Blame Visigothic proxies** — intelligence
6. **Summon Egilo to Seville** — negotiate extension
7. **Public oath renewal on Qur'an witness** — requires verified text display policy
8. **Preemptive strike with full army** — war flag `frank_war`

### Hooks

- `mem_broken_duero_truce` → `evt_charlemagne_raid` accelerated

### Chronicle Notes

> "Oaths on the Duero washed away with the first autumn rain—or the first sword."

---

## Event 22: The Lord in Chains

| Field | Value |
|-------|-------|
| **ID** | `evt_roderic_captive` |
| **Date** | Rajab 102 AH / ~March 720 CE |
| **Location** | `prov_merida` prison |
| **Theme** | Captive ruler |

### Characters

Roderic, Yahya, Fatima, Visigothic envoys, Ismail (slave broker)

### Context

If Merida fell, Roderic is captive. Visigoths offer ransom. Ibn Hud wants execution to prevent restoration.

### Choices

1. **Accept ransom 300 silver** — release; prestige −
2. **Execute publicly** — +fear; −legitimacy; Visigothic eternal enemy
3. **Hold for prisoner exchange** — `evt_prisoner_swap`
4. **Convert and enroll as advisor** — alt-history; scholars split
5. **House arrest in Seville** — coup symbol risk
6. **Sell to Ismail's network** — moral outrage; cash
7. **Fatwa on treatment of captive lords** — legal delay
8. **Grant limited rule as tributary** — AH-4 path

### Hooks

- Release → Visigothic raids − temporarily

### Chronicle Notes

> "The lord of Marida knelt in iron. Mercy and cruelty both had a price."

---

## Event 23: Exchange at Algeciras

| Field | Value |
|-------|-------|
| **ID** | `evt_prisoner_swap` |
| **Date** | Sha'ban 102 AH / ~April 720 CE |
| **Location** | `prov_algeciras` |
| **Theme** | Prisoner exchange |

### Characters

Roderic, captured Muslim officer (NPC), Egilo mediator, Nasir security

### Context

Franks propose swap: Roderic for a captured commander taken on the Duero.

### Choices

1. **Accept equal rank swap** — standard
2. **Demand additional silver** — negotiation
3. **Refuse; keep Roderic** — Frank hostility
4. **Swap plus non-aggression clause** — treaty
5. **Swap but assassinate Roderic en route** — intrigue; if caught, disaster
6. **Public ceremony for legitimacy** — prestige
7. **Consult Fatima on prisoner ethics** — lesson `lesson_captives`
8. **Trade multiple lower prisoners instead** — complex

### Hooks

- Failed assassination → `evt_broken_truce_franks` instant

### Chronicle Notes

> "Chains crossed the straits' wind. Freedom was bartered in bodies."

---

## Event 24: Zaynab's Plea

| Field | Value |
|-------|-------|
| **ID** | `evt_manumission_plea` |
| **Date** | Ramadan 102 AH / ~May 720 CE |
| **Location** | `city_seville` |
| **Theme** | Slave manumission |

### Characters

Zaynab, enslaved scribe (NPC: `chr_aminah`), Fatima, Ismail

### Context

Zaynab asks the amir to witness manumission of a skilled scribe who saved merchant ledgers from fire. Ismail offers to buy her instead.

### Choices

1. **Witness public manumission** — +legitimacy; lesson `lesson_mukataba`
2. **Decline; private matter** — neutral
3. **Sell to treasury skill pool** — cynical
4. **Fatwa on mandatory charity for manumission** — legal path
5. **Allow Ismail purchase** — +merchants; −scholars
6. **Conditional manumission after service term** — mukataba style
7. **Grant manumission; employ in Yusuf's office** — admin boost
8. **Use as political gift to Damascus envoy** — diplomacy weird

### Hooks

- Manumission → +scholar favor 10

### Chronicle Notes

> "A scribe's ink-stained hands received papers of freedom. The market watched."

---

## Event 25: The Christian Katib

| Field | Value |
|-------|-------|
| **ID** | `evt_elias_admin` |
| **Date** | Shawwal 102 AH / ~July 720 CE |
| **Location** | `prov_ishbiliya` administration |
| **Theme** | Non-Muslim administrator |

### Characters

Elias ibn Nuri, Yusuf, Fatima, Qaysi officers

### Context

Yusuf proposes Elias as chief fiscal scribe—best accountant, Christian dhimmi. Officers object.

### Choices

1. **Appoint Elias** — +efficiency 15%; −Qaysi 10
2. **Refuse; Muslim only** — −efficiency; +piety perception
3. **Appoint with Muslim co-signer** — compromise
4. **Trial period 6 months** — hook review
5. **Fatwa consultation** — lesson `lesson_dhimma_admin`
6. **Appoint Salim instead** — nepotism
7. **Outsource to merchant house** — corruption risk
8. **Elias converts** — rare branch; disputed legitimacy

### Hooks

- Appoint → `evt_dhimmi_wine` references trust

### Chronicle Notes

> "The ledgers did not care who held the reed. The court did."

---

## Event 26: Seat of Judgment

| Field | Value |
|-------|-------|
| **ID** | `evt_judge_appointment` |
| **Date** | Dhu al-Qi'dah 102 AH / ~August 720 CE |
| **Location** | Seville |
| **Theme** | Judge appointment |

### Characters

Abd al-Wahid, rival candidate, Fatima, Nusayba

### Context

Chief qadi seat vacant after death. Two qualified candidates split scholarly faction.

### Choices

1. **Appoint Abd al-Wahid** — stability
2. **Appoint Cordoba candidate** — unity price
3. **Dual judges** — `evt_two_qadis` risk
4. **Scholar election assembly** — 3 weeks; democratic flavor
5. **Delay; Yahya judges temporarily** — legitimacy hit
6. **Fatima breaks tie with advisory opinion** — precedent
7. **Sell office** — corrupt; conspiracy
8. **Import judge from Damascus** — recognition path

### Hooks

- Corrupt sale → `evt_false_witness` confidence −

### Chronicle Notes

> "The seat of judgment empty, every faction saw a mirror."

---

## Event 27: Fatima's Public Rebuke

| Field | Value |
|-------|-------|
| **ID** | `evt_fatima_sermon` |
| **Date** | Muharram 103 AH / ~September 720 CE |
| **Location** | Seville mosque courtyard |
| **Theme** | Scholar criticism |

### Characters

Fatima, Yahya, scholars, populace

### Context

After market deaths or legal breach, Fatima delivers public khutba-style criticism of amir's policy without naming him directly.

### Choices

1. **Attend and accept correction** — +legitimacy; prestige −
2. **Ignore** — scholar favor −15
3. **Ban public political sermons** — oppression; unrest
4. **Private meeting with Fatima** — relationship repair
5. **Fund madrasa she names** — silver 120
6. **Replace Fatima's patronage** — risky purge
7. **Counter with Umar military parade** — faction signal
8. **Change policy she criticized** — substantive fix

### Hooks

- Ban → `evt_palace_blade` +10% chance

### Chronicle Notes

> "Her voice carried farther than decree. The amir stood among the worshippers as student."

---

## Event 28: The Bloodied Robe

| Field | Value |
|-------|-------|
| **ID** | `evt_blood_cloth` |
| **Date** | Safar 103 AH / ~October 720 CE |
| **Location** | Seville court |
| **Theme** | Disputed evidence |

### Characters

Hassan, Ibn Hud, accused lover of Umm Khalid (NPC), Nasir

### Context

A bloodied robe implied to link the palace to murder. Hassan says planted; Ibn Hud demands inquiry.

### Choices

1. **Independent Hassan investigation** — 2 weeks truth
2. **Show trial** — spectacle
3. **Suppress evidence** — if guilty truth unknown
4. **Accuse Ibn Hud of planting** — faction war
5. **Consult Fatima on qadhf (false accusation) rules** — lesson
6. **Exile accused silently** — injustice possible
7. **Public reconciliation ritual** — face saving
8. **Use to remove Ibn Hud regardless** — tyranny path

### Hooks

- Wrong suppression → `evt_sister_letter` reinterpreted

### Chronicle Notes

> "Cloth does not speak, but men do. The robe became a faction banner."

---

## Event 29: Grazing Rights of the Zanata

| Field | Value |
|-------|-------|
| **ID** | `evt_zanata_grazing` |
| **Date** | Rabi' I 103 AH / ~November 720 CE |
| **Location** | `prov_beja` / `prov_ronda` |
| **Theme** | Tribal dispute |

### Characters

Tariq, Beja farmers, Salim, Yahya

### Context

Zanata herds trample wheat. Farmers kill two shepherds. Tariq demands blood money or pasture treaty.

### Choices

1. **Grant winter grazing; summer ban** — seasonal treaty
2. **Pay blood money from treasury** — silver 80
3. **Side with farmers; expel herds** — Berber −25
4. **Side with Tariq; fine farmers** — unrest
5. **Salim mediates** — family competence test
6. **Military escort for separate routes** — AP cost ongoing
7. **Fatwa on pastoral vs agricultural rights** — legal
8. **Ignore** — `evt_berber_migration` crisis

### Hooks

- Berber −25 → `AH-3 Berber Exodus` path

### Chronicle Notes

> "Hooves and wheat cannot share a field without a ruler's word."

---

## Event 30: Merchants Close the Warehouses

| Field | Value |
|-------|-------|
| **ID** | `evt_merchant_blockade` |
| **Date** | Rabi' II 103 AH / ~December 720 CE |
| **Location** | `city_malaga` / `city_cadiz` |
| **Theme** | Merchant pressure |

### Characters

Zaynab, Layla (family tie), port captains, Yusuf

### Context

Merchants halt grain imports protesting corruption and arbitrary fines.

### Choices

1. **Negotiate charter reducing fines** — −revenue; +trade
2. **Seize warehouses** — +grain short; −merchants massive
3. **Arrest Zaynab** — family crisis with Layla
4. **Public anti-corruption trial** — `evt_khalid_skim` tie-in
5. **Lower tariffs 2 years** — treaty-like
6. **Use navy threat** — if built; intimidation
7. **Grant Zaynab monopoly in exchange for open** — deal devil
8. **Import via military convoy** — army distraction

### Hooks

- Seize → trade income −50% for 30 weeks

### Chronicle Notes

> "Warehouses closed like fists. The amir learned trade could besiege a city."

---

## Event 31: Egilo's Offer

| Field | Value |
|-------|-------|
| **ID** | `evt_frank_pact` |
| **Date** | Jumada I 103 AH / ~January 721 CE |
| **Location** | `prov_zaragoza` embassy |
| **Theme** | Foreign alliance |

### Characters

Egilo, Yahya, Ibn Hud, Pelagius

### Context

Frankish envoy offers non-aggression if player abandons Visigothic allies and pays annual tribute.

### Choices

1. **Sign tribute treaty** — peace north; Visigothic +enemy; Damascus may scorn
2. **Refuse proudly** — +prestige; Frank raids
3. **Counter: joint partition of Visigothic lands** — ambitious; betrayal memory
4. **Delay; send gifts only** — stall
5. **Leak offer to Visigoths to extract their tribute** — intrigue
6. **Ask scholars if tribute to non-Muslims is permissible** — fatwa
7. **Marry Mundhir to Frankish princess (fictional)** — long alliance
8. **Assassinate Egilo** — war certain if failed

### Hooks

- Tribute → −5 silver/week; ends if broken

### Chronicle Notes

> "Egilo's wax seal gleamed like a second bayʿah—to a northern king."

---

## Event 32: Frankish Horsemen on the March

| Field | Value |
|-------|-------|
| **ID** | `evt_charlemagne_raid` |
| **Date** | Rajab 103 AH / ~March 721 CE |
| **Location** | `prov_duero` / `prov_zaragoza` |
| **Theme** | Frankish counterattack |

### Characters

Egilo, Umar, Pelagius, Yahya

### Context

Large Frankish raid crosses the Duero—historically inspired by early Carolingian interest in the Pyrenees [D], timing fictional [F].

### Choices

1. **Meet in open battle** — auto-resolve risk
2. **Scorched earth retreat** — province wealth −
3. **Pay them to withdraw** — silver 250
4. **Ambush at pass** — archer bonus terrain
5. **Call Berber cavalry flank** — Berber favor required
6. **Sacrifice Zaragoza militia delay** — cruel calculus
7. **Diplomatic protest only** — lose province temp
8. **Counter-raid into their march** — bold; treaty break

### Hooks

- Loss → `evt_move_capital` pressure if north collapses

### Chronicle Notes

> "Frankish lances tested the young border. The west answered with horse and debt."

---

## Event 33: Sails in the Gulf

| Field | Value |
|-------|-------|
| **ID** | `evt_pirate_fleet` |
| **Date** | Ramadan 103 AH / ~May 721 CE |
| **Location** | `prov_cadiz` / `prov_malaga` |
| **Theme** | Naval threat |

### Characters

Malaga port captain, Zaynab, Tariq (coastal), Yahya

### Context

Pirate squadrons—mixed Berber and Visigothic crews—raid shipping. Trade income −40%.

### Choices

1. **Build coastal galleys** — AP + silver investment; long fix
2. **Hire Zaynab's armed convoys** — expensive ongoing
3. **Fortify Cadiz tower** — defensive
4. **Negotiate pirate tribute** — shame; peace
5. **Joint strike with Ceuta garrison** — needs `prov_ceuta`
6. **Ignore; inland focus** — trade collapse
7. **Public execution of captured pirates** — deterrence
8. **Offer pirates letters of marque against Franks** — piracy flip

### Hooks

- Build galleys 12w → naval battles enabled

### Chronicle Notes

> "Sails without banners stole the gulf. The land amir became a sea lord by necessity."

---

## Event 34: Fall of Ishbiliya

| Field | Value |
|-------|-------|
| **ID** | `evt_seville_lost` |
| **Date** | Variable (crisis trigger) |
| **Location** | `prov_ishbiliya` |
| **Theme** | Capital loss |

### Characters

Ibn Hud or foreign invader, Nasir, Yahya, Umm Khalid

### Context

Catastrophic defeat or coup leaves Seville hostile while player still holds other provinces. **Not instant game over.**

### Choices

1. **Escape south to Malaga** — capital move chain
2. **Escape to Cordoba if held** — political signal
3. **Last stand in palace** — capture = game over
4. **Negotiate safe passage out** — prestige −30; survive
5. **Counterattack immediately from Ecija** — military gamble
6. **Burn archives before flee** — memory loss for factions
7. **Surrender personally for city mercy** — capture risk
8. **Call Berber relief from Ronda** — time buy

### Hooks

- Capture → **GAME OVER**
- Escape → `evt_move_capital` mandatory

### Chronicle Notes

> "Ishbiliya's gates closed on the amir who had entered them in triumph."

---

## Event 35: Where the Bayʿah Holds

| Field | Value |
|-------|-------|
| **ID** | `evt_move_capital` |
| **Date** | Follows `evt_seville_lost` |
| **Location** | Player choice |
| **Theme** | Capital relocation |

### Characters

Notables of candidate cities, scholars, Yahya

### Context

Must re-establish capital within 8 weeks or legitimacy collapse (−5/week).

### Choices

1. **Malaga** — port economy; naval
2. **Cordoba** — prestige; rival history
3. **Granada** — defensible; smaller tax base
4. **Ceuta** — African pivot; supply chain
5. **Toledo (if held)** — symbolic; hostile population
6. **Temporary Carmona** — weak but fast
7. **No fixed capital; itinerant court** — admin −15% ongoing
8. **Refuse; guerrilla amir** — extreme legitimacy hit

### Hooks

- Cordoba → `AH-2` schism if Ibn Hud holds part

### Chronicle Notes

> "The bayʿah was asked again, in another city's square."

---

## Event 36: The Dying Amir's Word

| Field | Value |
|-------|-------|
| **ID** | `evt_succession_crisis` |
| **Date** | Variable (post `evt_yahya_ill`) |
| **Location** | Capital |
| **Theme** | Succession |

### Characters

Mundhir, Salim, Ibn Hud, scholars, Umm Khalid

### Context

Yahya dies naturally. Heir must secure bayʿah within 12 weeks.

### Choices

1. **Immediate public designation of Mundhir** — if not done earlier, harder
2. **Regency council** — Umm Khalid + Abd al-Wahid
3. **Buy Ibn Hud with army command** — future coup hook
4. **Scholar assembly first** — legitimacy +; time −
5. **Military parade bayʿah** — Qaysi path
6. **Split: Mundhir civil, Salim military** — dual power risk
7. **Reject Ibn Hud demands; civil war** — succession fail chance
8. **Appeal to Damascus for recognition letter** — slow bonus

### Hooks

- Fail → **GAME OVER** collapse

### Chronicle Notes

> "The dying amir's word became a constitution written in breath."

---

## Event 37: Fever in the Palace

| Field | Value |
|-------|-------|
| **ID** | `evt_yahya_ill` |
| **Date** | Variable (health < 30) |
| **Location** | Palace |
| **Theme** | Ruler illness |

### Characters

Yahya, physicians, Umm Khalid, Salim, conspirators

### Context

Ruler collapses. Recovery possible early; third occurrence likely fatal.

### Choices

1. **Private treatment; hide severity** — conspiracy window
2. **Public prayer and charity** — +morale
3. **Name regent now** — succession prep +
4. **Testament recording with Yusuf** — chronicle clarity
5. **Experimental physician from Cordoba** — risk/reward health
6. **Retire to Carmona clean air** — away from court plots
7. **Continue working** — health − faster
8. **Investigate poison** — `evt_palace_blade` link

### Hooks

- Death → `evt_succession_crisis` within 1 week

### Chronicle Notes

> "Fever measured the realm in the amir's pulse."

---

## Event 38: Brother and Son

| Field | Value |
|-------|-------|
| **ID** | `evt_mundhir_salim` |
| **Date** | Variable |
| **Location** | Court |
| **Theme** | Family conflict |

### Characters

Salim, Mundhir (age advances), Umm Khalid, Yahya

### Context

Salim believes Carmona governorship insufficient; Mundhir receives military tutors. Family fracture.

### Choices

1. **Elevate Salim to vizier** — competence test
2. **Confirm Mundhir sole heir publicly** — Salim −loyalty
3. **Partition: Salim east, Mundhir west** — dangerous precedent
4. **Send Salim on pilgrimage** — remove from court
5. **Marriage bond between their children** — future fix
6. **Strip Salim titles** — rebellion risk
7. **Joint campaign bonding** — military event
8. **Ignore until fight breaks out** — worst outcomes

### Hooks

- Strip → Salim coup branch

### Chronicle Notes

> "Brother and son stood on either side of the throne's shadow."

---

## Event 39: Revolt in the Red Fort

| Field | Value |
|-------|-------|
| **ID** | `evt_granada_revolt` |
| **Date** | Variable (Berber favor < 20) |
| **Location** | `prov_granada` |
| **Theme** | Rebellion |

### Characters

Tariq (may join or oppose), Granada qadi, Yahya, Umar

### Context

Granada rises after broken grazing promises or excessive tax. Mountain passes blocked.

### Choices

1. **Siege Granada** — costly
2. **Negotiate autonomy treaty** — −tax; +peace
3. **Send Tariq to quell as insider** — loyalty check
4. **Burn passes; starve** — harsh; population −
5. **Offer blood money + tax cut** — silver
6. **Ignore; lose province** — Berber emboldened elsewhere
7. **Divide: punish leaders only** — surgical
8. **Personal visit with bayʿah renewal** — courage test

### Hooks

- Loss → cavalry recruitment −30%

### Chronicle Notes

> "The red fort's walls held against the amir who had once been welcomed through them."

---

## Event 40: Ash and Stone

| Field | Value |
|-------|-------|
| **ID** | `evt_ronda_raze` |
| **Date** | Variable (military crisis) |
| **Location** | `prov_ronda` |
| **Theme** | Fortress destruction / population relocation |

### Characters

Umar, Tariq, Ronda population, Yahya

### Context

After repeated revolts, officers urge razing Ronda fort and relocating population to Seville plain for control.

### Choices

1. **Raze fort; relocate population** — unrest − long term; horror memory
2. **Rebuild fort with loyal garrison** — silver 200
3. **Leave autonomous under Tariq** — Berber +; central −
4. **Partial demolition only** — compromise ineffective
5. **Fatwa on destruction of inhabited forresses** — legal block possible
6. **Offer land in Malaga instead of Seville** — migration cost
7. **Turn fort into scholar monastery** — soft power weird
8. **Abandon Ronda entirely** — province wild

### Hooks

- Raze → `mem_ronda_ash` permanent Berber malus until atonement event

### Chronicle Notes

> "Ash and stone marked where mercy ended. Ronda became a warning carved in rubble."

---

# Part II: Fifty Educational / Quotation Entries

Each entry uses: **Anchor | Sources | Principle | Limitations | In-game situations**

**Scripture policy:** Where Qur'an or hadith appear, entries reference **database IDs only**—no invented Arabic text in this document.

---

## Political & Bayʿah (8 entries)

### Lesson 01: `lesson_bayaa`

| Field | Content |
|-------|---------|
| **Anchor** | Bayʿah (pledge of allegiance) |
| **Sources** | EI2 "Bayʿa"; Crone & Hinds, *God's Caliph* (1986); Kennedy, *The Prophet and the Age of the Caliphates* (2004) |
| **Principle** | Early Islamic political legitimacy often required acknowledgment by notables, soldiers, or scholars—not merely private designation. |
| **Limitations** | Game reduces multi-party negotiation to faction favor scores. |
| **Situations** | Opening bayʿah, succession, rival commander events |

### Lesson 02: `lesson_shura`

| Field | Content |
|-------|---------|
| **Anchor** | Shūrā (consultation) in governance |
| **Sources** | EI2 "Shūrā"; PARAPHRASE context: Qur'an reference via `quran_42_38` (consultation verse—bind exact text at production) |
| **Principle** | Consultation with qualified advisors was a valued governance norm in early Islamic political thought. |
| **Limitations** | Game uses optional consultation buttons, not full deliberative assembly simulation. |
| **Situations** | Major decrees, fatwa requests, succession regency |

### Lesson 03: `lesson_ummah_polity`

| Field | Content |
|-------|---------|
| **Anchor** | Caliphate as universal polity ideal |
| **Sources** | Donner, *Muhammad and the Believers* (2010); Hoyland, *In God's Path* (2015) |
| **Principle** | The caliphate combined religious and political authority in ways that evolved across the Umayyad period. |
| **Limitations** | 717 western autonomy scenario is fictional. |
| **Situations** | Damascus recognition track |

### Lesson 04: `lesson_walid_sulayman`

| Field | Content |
|-------|---------|
| **Anchor** | Sulayman ibn Abd al-Malik's succession (715–717) |
| **Sources** | Kennedy (2004); al-Tabari chronicle (English trans.) |
| **Principle** | Umayyad succession could involve familial arrangements and provincial army politics. |
| **Limitations** | Western appointments in 717 are not individually verified in sources used. |
| **Situations** | Imperial envoy events |

### Lesson 05: `lesson_andalus_conquest`

| Field | Content |
|-------|---------|
| **Anchor** | Early conquest of Iberia (711–716) |
| **Sources** | Collins, *Caliphate and Kingship in Medieval Iberia* (2012); EI2 "Al-Andalus" |
| **Principle** | Initial Islamic control in Iberia was uneven; many areas remained contested for years. |
| **Limitations** | Province boundaries on map are design abstractions. |
| **Situations** | Unfinished conquest flags, Merida arc |

### Lesson 06: `lesson_legitimacy_types`

| Field | Content |
|-------|---------|
| **Anchor** | Types of political legitimacy (charisma, tradition, law) |
| **Sources** | Weber (adapted in Islamic studies); Azmeh, *Muslim Kingship* (1997) |
| **Principle** | Rulers could draw legitimacy from lineage, victory, just rule, and scholarly approval simultaneously. |
| **Limitations** | Three stats (prestige, legitimacy, legal) compress richer ideas. |
| **Situations** | All major choices |

### Lesson 07: `lesson_promise_keeping`

| Field | Content |
|-------|---------|
| **Anchor** | Amana (trustworthiness) in political promises |
| **Sources** | EI2 "Amana"; PARAPHRASE: hadith on trust via `Sahih_Bukhari:33` (bind exact chain at production) |
| **Principle** | Breaking public commitments carried social and religious stigma in early Islamic ethics discourse. |
| **Limitations** | Memory decay halflife is a game balance mechanic. |
| **Situations** | Treaties, unpaid troop pledges |

### Lesson 08: `lesson_faction_tribal`

| Field | Content |
|-------|---------|
| **Anchor** | Qays–Yaman factionalism |
| **Sources** | EI2 "Kays-Aylan" / "Yaman"; Kennedy (2004) |
| **Principle** | Tribal factional identities influenced Umayyad military politics, especially in Syria and the garrisons. |
| **Limitations** | Western Iberian expression of Qays/Yemeni rivalry in 717 is partly fictionalized. |
| **Situations** | `evt_qays_yemen_clash`, army events |

---

## Military & Conquest (8 entries)

### Lesson 09: `lesson_jihad_context`

| Field | Content |
|-------|---------|
| **Anchor** | Jihad as struggle/warfare in early Islamic discourse |
| **Sources** | Bonner, *Jihad in Islamic History* (2006); Donner (2010) |
| **Principle** | Early conquest-era warfare was framed within broader notions of community expansion and obligation—not reducible to modern "holy war" clichés. |
| **Limitations** | Game uses simplified military tags, not theological treatises. |
| **Situations** | Conquest decrees, fatwas before battle |

### Lesson 10: `lesson_ghanima`

| Field | Content |
|-------|---------|
| **Anchor** | Ghanīma (war spoils) distribution |
| **Sources** | EI2 "Ghanīma"; Firestone, *Jihad* (1999) |
| **Principle** | Islamic legal discourse defined categories of war booty and shares for participants and the treasury. |
| **Limitations** | Fifth-to-treasury rule simplified to auto-deduct. |
| **Situations** | `evt_spoils_theft`, post-battle loot |

### Lesson 11: `lesson_siege_ethics`

| Field | Content |
|-------|---------|
| **Anchor** | Siege conduct in medieval warfare |
| **Sources** | Kennedy, *The Armies of the Caliphs* (2001); Nicolle, *The Fall of English France* (siege comparanda) |
| **Principle** | Sieges balanced starvation, assault, and negotiation; religious sites often carried special restraint in discourse. |
| **Limitations** | Catapult/church events are narrative, not simulationist physics. |
| **Situations** | `evt_merida_siege`, city surrender |

### Lesson 12: `lesson_cavalry_iberia`

| Field | Content |
|-------|---------|
| **Anchor** | Cavalry in early medieval Iberia |
| **Sources** | Collins (2012); O'Callaghan, *A History of Medieval Spain* |
| **Principle** | Horse availability shaped raid warfare and elite status; Berber federates were cavalry-critical. |
| **Limitations** | Three unit types only. |
| **Situations** | Recruitment, Berber events |

### Lesson 13: `lesson_supply_lines`

| Field | Content |
|-------|---------|
| **Anchor** | Logistics in Umayyad campaigns |
| **Sources** | Kennedy (2001); Haldon, *Warfare, State and Society* |
| **Principle** | Armies operated within grain and forage networks; supply failure caused desertion. |
| **Limitations** | Weekly grain tick abstracted. |
| **Situations** | March, siege, `evt_grain_ship` |

### Lesson 14: `lesson_command_loyalty`

| Field | Content |
|-------|---------|
| **Anchor** | Commander autonomy in early caliphate |
| **Sources** | Kennedy (2004); EI2 "Djund" |
| **Principle** | Provincial commanders wielded substantial de facto power, especially with distant Damascus. |
| **Limitations** | Commander stats are RPG-like simplifications. |
| **Situations** | `evt_umar_disobey`, coup arcs |

### Lesson 15: `lesson_frank_pyrenees`

| Field | Content |
|-------|---------|
| **Anchor** | Frankish interest in Pyrenean frontier |
| **Sources** | Collins (2012); EI2 "Franks" |
| **Principle** | Carolingian power projection southward developed over decades; 717 is early for large invasions but border raids are plausible. |
| **Limitations** | Charlemagne-named raid is ahistorical for 717—event tagged alt-history. |
| **Situations** | `evt_charlemagne_raid`, Frank diplomacy |

### Lesson 16: `lesson_naval_raid`

| Field | Content |
|-------|---------|
| **Anchor** | Maritime raiding in early medieval Mediterranean |
| **Sources** | EI2 "Bahr al-Rum"; Picard, *La mer et les musulmans* |
| **Principle** | Coastal economies vulnerable to piracy; naval defense required dedicated investment. |
| **Limitations** | Naval system abstracted to port level + events. |
| **Situations** | `evt_pirate_fleet` |

---

## Law & Taxation (10 entries)

### Lesson 17: `lesson_kharaj`

| Field | Content |
|-------|---------|
| **Anchor** | Kharāj (land tax) |
| **Sources** | EI2 "Kharād̲j̲"; Lokkegaard, *Islamic Taxation* |
| **Principle** | Land revenue from conquered territories was a central fiscal institution, evolving with settlement patterns. |
| **Limitations** | Per-province rate is uniform baseline with modifiers. |
| **Situations** | Tax decrees, `evt_ecija_tax` |

### Lesson 18: `lesson_jizya`

| Field | Content |
|-------|---------|
| **Anchor** | Jizya (poll tax on dhimmis) |
| **Sources** | EI2 "Djizya"; Fattal, *Le statut légal des non-musulmans* |
| **Principle** | Dhimmi communities often paid jizya in exchange for protected status under Islamic rule—details varied by time and place. |
| **Limitations** | Game does not simulate individual dhimmi households. |
| **Situations** | Dhimmi events, Valencia treaty |

### Lesson 19: `lesson_dhimma`

| Field | Content |
|-------|---------|
| **Anchor** | Dhimma (protected status) |
| **Sources** | EI2 "Dhimma"; Tritton, *The Caliphs and their Non-Muslim Subjects* |
| **Principle** | Non-Muslim subjects' rights and obligations were debated and negotiated within legal frameworks. |
| **Limitations** | Communal not individual simulation. |
| **Situations** | `evt_dhimmi_wine`, `evt_tanner_feud` |

### Lesson 20: `lesson_qadi`

| Field | Content |
|-------|---------|
| **Anchor** | Qāḍī (judge) |
| **Sources** | EI2 "Ḳāḍī"; Tillier, *Les cadis d'Iraq* (comparative judiciary) |
| **Principle** | Judges applied Islamic law with varying independence from governors; appointment was politically significant. |
| **Limitations** | Court mini-game is choice-based, not case simulation. |
| **Situations** | `evt_judge_appointment`, `evt_two_qadis` |

### Lesson 21: `lesson_fatwa`

| Field | Content |
|-------|---------|
| **Anchor** | Fatwā (legal opinion) |
| **Sources** | EI2 "Fatwā"; Masud, *Islamic Legal Interpretation* |
| **Principle** | Scholars issued non-binding opinions guiding rulers and individuals; enforcement depended on political will. |
| **Limitations** | In-game fatwas gate actions for playability. |
| **Situations** | All legal consultations |

### Lesson 22: `lesson_madhhab`

| Field | Content |
|-------|---------|
| **Anchor** | Madhhab (legal school) formation |
| **Sources** | EI2 "Madhab"; Schacht, *Introduction to Islamic Law* |
| **Principle** | Legal schools crystallized over centuries; early 8th-century western practice was not identical to later Maliki dominance. |
| **Limitations** | **[DISPUTED]** Maliki lean at 717 flagged in UI. |
| **Situations** | Scholar characters, fatwa variance |

### Lesson 23: `lesson_hudud`

| Field | Content |
|-------|---------|
| **Anchor** | Ḥudūd (fixed penalties) |
| **Sources** | EI2 "Hudud"; PARAPHRASE: Qur'an references on theft via licensed IDs only |
| **Principle** | Fixed crimes carried defined penalties in legal theory; application required evidentiary standards. |
| **Limitations** | Game uses punishment menu abstraction. |
| **Situations** | Court events, theft cases |

### Lesson 24: `lesson_qadhf`

| Field | Content |
|-------|---------|
| **Anchor** | Qadhf (false accusation of illicit sex) |
| **Sources** | EI2 "Ḳadhf"; Islamic law surveys |
| **Principle** | False accusation carried serious penalties in legal discourse, shaping witness caution. |
| **Limitations** | `evt_blood_cloth` simplifies evidence rules. |
| **Situations** | `evt_false_witness`, palace scandals |

### Lesson 25: `lesson_emergency_levy`

| Field | Content |
|-------|---------|
| **Anchor** | Emergency taxation |
| **Sources** | Kennedy (2001); EI2 "Kharād̲j̲" (extraordinary impositions) |
| **Principle** | Rulers sometimes imposed extraordinary levies in crisis; scholars debated limits. |
| **Limitations** | Vineyard levy in §58 is fictional scenario. |
| **Situations** | Pre-siege decrees, famine |

### Lesson 26: `lesson_shahada`

| Field | Content |
|-------|---------|
| **Anchor** | Witness testimony (shahāda) standards |
| **Sources** | EI2 "Shahāda"; Johansen, *Contingency in a Sacred Law* |
| **Principle** | Testimony rules varied by crime category and witness qualifications. |
| **Limitations** | Evidence % is hidden stat. |
| **Situations** | `evt_false_witness`, trials |

---

## Social & Dhimmi (8 entries)

### Lesson 27: `lesson_dhimma_admin`

| Field | Content |
|-------|---------|
| **Anchor** | Non-Muslims in administration |
| **Sources** | Tritton (1930); EI2 "Dhimma" |
| **Principle** | Historical administrations sometimes employed non-Muslim scribes; debate existed over roles in governance. |
| **Limitations** | Elias appointment is narrative choice. |
| **Situations** | `evt_elias_admin` |

### Lesson 28: `lesson_communal_autonomy`

| Field | Content |
|-------|---------|
| **Anchor** | Communal self-regulation |
| **Sources** | Goitein, *A Mediterranean Society* (Jewish communality); EI2 "Millat" concepts |
| **Principle** | Religious communities often managed internal affairs under overarching state frameworks. |
| **Limitations** | Guild separation in tanner event simplified. |
| **Situations** | `evt_tanner_feud` |

### Lesson 29: `lesson_conversion`

| Field | Content |
|-------|---------|
| **Anchor** | Conversion in conquered lands |
| **Sources** | Bulliet, *Conversion to Islam in the Medieval Period*; EI2 "Ishtirāk" |
| **Principle** | Conversion was gradual and regionally uneven—not immediate majority flip. |
| **Limitations** | Population classes abstract percentages. |
| **Situations** | Long-term province integration |

### Lesson 30: `lesson_public_order`

| Field | Content |
|-------|---------|
| **Anchor** | Ḥisba (market/public order) |
| **Sources** | EI2 "Ḥisba"; Lapidus, *A History of Islamic Societies* |
| **Principle** | Market supervision and public morals enforcement were recognized governance functions. |
| **Limitations** | No hisba mini-game in MVP. |
| **Situations** | `evt_market_riot`, wine dispute |

### Lesson 31: `lesson_plague_response`

| Field | Content |
|-------|---------|
| **Anchor** | Epidemic response in medieval Islamicate societies |
| **Sources** | Dols, *The Black Death in the Middle East* (comparative); historical plague discourse |
| **Principle** | Responses combined prayer, charity, flight debate, and practical quarantine in later periods; early 8th-c. specifics sparse. |
| **Limitations** | Carmona plague timing fictional. |
| **Situations** | `evt_plague_carmona` |

### Lesson 32: `lesson_migration_settlement`

| Field | Content |
|-------|---------|
| **Anchor** | Settlement and tribal migration |
| **Sources** | EI2 "Futūḥ"; Kennedy (2004) |
| **Principle** | Conquest brought Arab and Berber settlement patterns reshaping demographics over generations. |
| **Limitations** | Single-event migration spikes abstract long processes. |
| **Situations** | `evt_berber_migration`, Ronda relocation |

### Lesson 33: `lesson_wine_trade`

| Field | Content |
|-------|---------|
| **Anchor** | Alcohol trade under Islamic rule |
| **Sources** | EI2 "Khamr"; Islamic legal literature surveys |
| **Principle** | Muslim consumption prohibited; dhimmi production/trade historically existed under varying local rules. |
| **Limitations** | License mechanic is game abstraction. |
| **Situations** | `evt_dhimmi_wine` |

### Lesson 34: `lesson_urban_notables`

| Field | Content |
|-------|---------|
| **Anchor** | Urban elite (aʿyān) |
| **Sources** | EI2 "Aʿyān"; Kennedy (2004) |
| **Principle** | City notables mediated tax, unrest, and bayʿah ceremonies. |
| **Limitations** | Ash'arī faction stands in for diverse elites. |
| **Situations** | Bayʿah, tax revolts |

---

## Slavery & Captives (6 entries)

### Lesson 35: `lesson_captives`

| Field | Content |
|-------|---------|
| **Anchor** | War captives |
| **Sources** | EI2 "Raḳḳ"; Donner (2010) |
| **Principle** | Captives of war faced ransom, enslavement, or release depending on context and law. |
| **Limitations** | Individual captive stories are narrative NPCs. |
| **Situations** | `evt_roderic_captive`, `evt_prisoner_swap` |

### Lesson 36: `lesson_ransom`

| Field | Content |
|-------|---------|
| **Anchor** | Fidyah (ransom) |
| **Sources** | EI2 "Fidāʾ"; Firestone (1999) |
| **Principle** | Ransom for captives was recognized in law and diplomacy. |
| **Limitations** | Silver amounts are balance numbers. |
| **Situations** | Prisoner exchange events |

### Lesson 37: `lesson_mukataba`

| Field | Content |
|-------|---------|
| **Anchor** | Mukātaba (contracted manumission) |
| **Sources** | EI2 "Mukātaba"; PARAPHRASE: Qur'an encouragement of manumission via `quran_24_33` (bind at production) |
| **Principle** | Contractual paths to freedom existed within slavery institutions discussed in fiqh. |
| **Limitations** | Zaynab event simplifies to choice tree. |
| **Situations** | `evt_manumission_plea` |

### Lesson 38: `lesson_slavery_economy`

| Field | Content |
|-------|---------|
| **Anchor** | Slavery in early Islamic economies |
| **Sources** | EI2 "ʿAbd"; Gordon, *Slavery in the Arab World* |
| **Principle** | Enslaved labor existed in domestic, military, and administrative roles; institutions varied regionally. |
| **Limitations** | Not a plantation simulator; ethical framing via lessons. |
| **Situations** | Population class, Ismail broker |

### Lesson 39: `lesson_captive_treatment`

| Field | Content |
|-------|---------|
| **Anchor** | Treatment standards for captives |
| **Sources** | Firestone (1999); classical fiqh summaries (paraphrase only in-game) |
| **Principle** | Legal discourse addressed humane treatment categories and prohibitions. |
| **Limitations** | Roderic execution branch is gameplay moral test. |
| **Situations** | Captive ruler events |

### Lesson 40: `lesson_exchange_diplomacy`

| Field | Content |
|-------|---------|
| **Anchor** | Prisoner exchange diplomacy |
| **Sources** | Kennedy (2001); medieval diplomatic practice surveys |
| **Principle** | Exchanging prisoners was a common cross-cultural diplomatic tool. |
| **Limitations** | Frank-Muslim swap ahistorical timing possible. |
| **Situations** | `evt_prisoner_swap` |

---

## Economy & Trade (6 entries)

### Lesson 41: `lesson_currency`

| Field | Content |
|-------|---------|
| **Anchor** | Umayyad coinage (silver dirham) |
| **Sources** | EI2 "Dīnār"; Album, *A Checklist of Islamic Coins* |
| **Principle** | Silver dirhams dominated much Umayyad fiscal exchange; debasement and supply affected armies. |
| **Limitations** | Single "silver" resource. |
| **Situations** | Treasury, tribute |

### Lesson 42: `lesson_trade_routes`

| Field | Content |
|-------|---------|
| **Anchor** | Iberian trade networks |
| **Sources** | Collins (2012); EI2 "Al-Andalus" commerce |
| **Principle** | Coastal ports linked Iberia to Mediterranean and African markets. |
| **Limitations** | Trade routes binary on/off per event. |
| **Situations** | Merchants, pirates |

### Lesson 43: `lesson_famine_relief`

| Field | Content |
|-------|---------|
| **Anchor** | Famine relief practices |
| **Sources** | EI2 "Ḳaḥṭ"; Lapidus (1988) |
| **Principle** | Rulers gained legitimacy through grain distribution and market intervention. |
| **Limitations** | Subsidy button instant effect. |
| **Situations** | `evt_grain_ship`, `evt_market_riot` |

### Lesson 44: `lesson_corruption`

| Field | Content |
|-------|---------|
| **Anchor** | Administrative corruption |
| **Sources** | Kennedy (2004); EI2 "Ḥisba" |
| **Principle** | Provincial skim and false reporting plagued pre-modern states; audits were political acts. |
| **Limitations** | Corruption 0–100 hidden until audit. |
| **Situations** | `evt_khalid_skim` |

### Lesson 45: `lesson_merchant_power`

| Field | Content |
|-------|---------|
| **Anchor** | Merchant political influence |
| **Sources** | Goitein (1967); EI2 "Tudjjar" |
| **Principle** | Merchant networks could pressure rulers via credit, boycotts, and urban unrest. |
| **Limitations** | Zaynab as syndicate stand-in. |
| **Situations** | `evt_merchant_blockade` |

### Lesson 46: `lesson_agriculture_irrigation`

| Field | Content |
|-------|---------|
| **Anchor** | Irrigation in al-Andalus |
| **Sources** | Glick, *Islamic and Christian Spain*; EI2 "Al-Andalus" agriculture |
| **Principle** | Irrigation and crop choice shaped tax base and famine resilience. |
| **Limitations** | Quarterly harvest modifier only. |
| **Situations** | Murcia, Ecija provinces |

---

## Scholarship (4 entries)

### Lesson 47: `lesson_chronicle_writing`

| Field | Content |
|-------|---------|
| **Anchor** | Arabic historical chronicles |
| **Sources** | EI2 "Taʾrīkh"; Robinson, *Islamic Historiography* |
| **Principle** | Court chronicles shaped memory of rulers for posterity—often politically inflected. |
| **Limitations** | In-game chronicle is player-influenced but system-generated. |
| **Situations** | End of reign, event aftermath |

### Lesson 48: `lesson_khutba`

| Field | Content |
|-------|---------|
| **Anchor** | Khuṭba (Friday sermon) as political tool |
| **Sources** | EI2 "Khuṭba"; Crone & Hinds (1986) |
| **Principle** | Mentioning the ruler in the khuṭba symbolized recognition in many regions. |
| **Limitations** | Fatima sermon event conflates khutba with scholarly rebuke for drama. |
| **Situations** | `evt_fatima_sermon`, legitimacy |

### Lesson 49: `lesson_translation_movement`

| Field | Content |
|-------|---------|
| **Anchor** | Early knowledge transmission |
| **Sources** | Gutas, *Greek Thought, Arabic Culture* (later wave comparandum); EI2 "Madrasa" precursors |
| **Principle** | Scholarly networks in early Islamicate societies grew with urbanization—madrasa institutions later. |
| **Limitations** | Fatima's role fictional; women scholars historically documented but sparse in 717 west. |
| **Situations** | Scholar faction events |

### Lesson 50: `lesson_historical_memory`

| Field | Content |
|-------|---------|
| **Anchor** | Historical memory and legitimacy |
| **Sources** | Paul, *Islamic Legitimacy in a Plural Asia*; EI2 "Shakwa" related concepts |
| **Principle** | Past promises and atrocities constrained future politics in pre-modern societies. |
| **Limitations** | Memory decay halflife is game balance. |
| **Situations** | Memory system, treaties, chronicle |

---

# Part III: Event Theme Coverage Index

| Theme | Event ID(s) |
|-------|-------------|
| Unfinished conquest | `evt_wadi_legacy`, `evt_merida_siege` |
| City surrender | `evt_valencia_surrender` |
| Siege | `evt_merida_siege` |
| Commander disobedience | `evt_umar_disobey` |
| Stolen spoils | `evt_spoils_theft` |
| Rival popularity | `evt_popular_general` |
| Army factional dispute | `evt_qays_yemen_clash` |
| Unpaid troops | `evt_empty_chest` |
| Assassination | `evt_palace_blade` |
| Palace conspiracy | `evt_sister_letter` |
| Governor corruption | `evt_khalid_skim` |
| False accusation | `evt_false_witness` |
| Tax revolt | `evt_ecija_tax` |
| Food shortage | `evt_grain_ship` |
| Plague | `evt_plague_carmona` |
| Migration | `evt_berber_migration` |
| Religious dispute | `evt_dhimmi_wine` |
| Legal disagreement | `evt_two_qadis` |
| Public disorder | `evt_market_riot` |
| Communal violence | `evt_tanner_feud` |
| Broken treaty | `evt_broken_truce_franks` |
| Captive ruler | `evt_roderic_captive` |
| Prisoner exchange | `evt_prisoner_swap` |
| Slave manumission | `evt_manumission_plea` |
| Non-Muslim administrator | `evt_elias_admin` |
| Judge appointment | `evt_judge_appointment` |
| Scholar criticism | `evt_fatima_sermon` |
| Disputed evidence | `evt_blood_cloth` |
| Tribal dispute | `evt_zanata_grazing` |
| Merchant pressure | `evt_merchant_blockade` |
| Foreign alliance | `evt_frank_pact` |
| Frankish counterattack | `evt_charlemagne_raid` |
| Naval threat | `evt_pirate_fleet` |
| Capital loss | `evt_seville_lost` |
| Capital relocation | `evt_move_capital` |
| Succession | `evt_succession_crisis` |
| Ruler illness | `evt_yahya_ill` |
| Family conflict | `evt_mundhir_salim` |
| Rebellion | `evt_granada_revolt` |
| Fortress destruction / relocation | `evt_ronda_raze` |

---

*End of Events & Educational Content Supplement v1.0*
