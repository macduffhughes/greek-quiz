// Common context strings (boilerplate removed)
const IDENTIFY_TENSE_CONTEXT = "Identify the tense of each verb and fill in the blank with ὁ μέλλων χρόνος (Future Tense) or ὁ ἐνεστὼς χρόνος (Present Tense):";
const REWRITE_FUTURE_TO_PRESENT_CONTEXT = "Rewrite the sentence, changing the verbs from the Future Tense to the Present Tense, as in the example: ὁ κυβερνήτης τὴν ναῦν κυβερνήσει (α) -> ὁ κυβερνήτης τὴν ναῦν κυβερνᾷ:";
const REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT = "Rewrite the sentences, converting the verbs from the Present Tense to the Future Tense:";
const REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT = "Rewrite the sentences, converting the verbs from the Present Tense to the Future Tense:";
const REWRITE_PRESENT_TO_FUTURE_E7_CONTEXT = "Rewrite the sentences, converting the verbs from the Present Tense to the Future Tense:";
const FILL_FUTURE_FORM_E4_CONTEXT = "Fill in the blanks, forming the correct Future form of the given verb. Pay attention to the personal endings:";
const ANSWER_FUTURE_TENSE_E10_CONTEXT = "Answer the question as in the example, putting the given verbs in the Future Tense:";
const MAKE_PHRASES_FUTURE_E11_CONTEXT = "Make phrases in the Future Tense, using the words given in the given order, as in the example:";
const FILL_FUTURE_FORM_E12_CONTEXT = "Fill in the gaps with the correct Future form of the given verb:";
const REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT = "Rewrite the sentence, changing the Present Participles/Infinitives to Future Participles/Infinitives, as in the example:";
const THRASYMACUS_QUESTIONS_E14_CONTEXT = "Based on Thrasymachus’ questions to the priestess: 'λέγε μοι, ὦ φιλτάτη Πῡθίᾱ, ἆρ’ ἰσχῡρὸς ἔσομαι, ὥσπερ ὁ Ἀχιλλεύς; ἆρ’ ὄψομαι πολλᾱ́ς τε καὶ καλᾱ̀ς πόλεις τᾱ̀ς ἐν τῇ Ἑλλάδι, ὥσπερ ὁ Ἰᾡσᾡων; ἆρα τούς τε πονηροὺς πολεμίους ἀποκτενῶ τε καὶ ἄναξ φοβερώτατος γενήσομαι, ὥσπερ ὁ Ἀγαμέμνων; ἆρα τὴν καλλίστην γυναῖκα γαμήσω, ὥσπερ ὁ Πάρις?':";

// Section label constants
const SECTION_1_LABEL = "Section 1: Identify the tense of each verb (μελέτημα αʹ, 10 questions)";
const SECTION_2_LABEL = "Section 2: Rewrite Future to Present (μελέτημα βʹ, 5 questions)";
const SECTION_3_LABEL = "Section 3: Fill in Future Form (μελέτημα δʹ, 8 questions)";
const SECTION_4_LABEL = "Section 4: Rewrite Present to Future (μελέτημα εʹ, 6 questions)";
const SECTION_5_LABEL = "Section 5: Rewrite Present to Future (μελέτημα Ϛʹ, 6 questions)";
const SECTION_6_LABEL = "Section 6: Rewrite Present to Future (μελέτημα ζʹ, 5 questions)";
const SECTION_7_LABEL = "Section 7: Fill in Future Form (μελέτημα θʹ, 5 questions)";
const SECTION_8_LABEL = "Section 8: Answer in Future Tense (μελέτημα ιʹ, 8 questions)";
const SECTION_9_LABEL = "Section 9: Make Phrases in Future Tense (μελέτημα ιαʹ, 5 questions)";
const SECTION_10_LABEL = "Section 10: Fill in Future Form (μελέτημα ιβʹ, 5 questions)";
const SECTION_11_LABEL = "Section 11: Rewrite Present Participles/Infinitives to Future (μελέτημα ιγʹ, 7 questions)";
const SECTION_12_LABEL = "Section 12: Thrasymachus’ Questions (μελέτημα ιδʹ, 6 questions)";

const quizData = [
    // Section 1: Identify the tense of each verb (μελέτημα αʹ, 10 questions)
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "1. ὁ στρατιώτης τὸν ἵππον <b>λύει</b> ___", answer: "ὁ ἐνεστὼς χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "2. οἱ ποιμένες δι’ ὀλίγου τὰ πρόβατα <b>λύσουσιν</b> ___", answer: "ὁ μέλλων χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "3. αἱ γυναῖκες <b>χορεύσουσιν</b> ___", answer: "ὁ μέλλων χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "4. ἡ μήτηρ τὸν παῖδα <b>παιδεύσει</b> ___", answer: "ὁ μέλλων χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "5. ὁ ἄναξ <b>κελεύσει</b> τῆς μάχης ἄρχεσθαι ___", answer: "ὁ μέλλων χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "6. ὁ Θρασύμαχος τὸν ἱερέᾱ <b>ὑποπτεύει</b> ___", answer: "ὁ ἐνεστὼς χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "7. ἆρα <b>πιστεύσεις</b> μοι, ὦ νεᾱνίᾱ; ___", answer: "ὁ μέλλων χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "8. ὁ Ἰᾡσᾡων τῶν τῆς Ἰωλκοῦ πολῑτῶν <b>βασιλεύσει</b> ___", answer: "ὁ μέλλων χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "9. νῦν, ἄναξ ὤν, <b>βασιλεύω</b> ταύτης τῆς πόλεως ___", answer: "ὁ ἐνεστὼς χρόνος" },
    { section: "μελέτημα αʹ", sectionLabel: SECTION_1_LABEL, context: IDENTIFY_TENSE_CONTEXT, question: "10. οἱ ἱερεῖς ἐν τῷ ἱερῳ τοῖς θεοῖς <b>ἱερεύσουσιν</b> ___", answer: "ὁ μέλλων χρόνος" },

    // Section 2: Rewrite Future to Present (μελέτημα βʹ, 5 questions)
    { section: "μελέτημα βʹ", sectionLabel: SECTION_2_LABEL, context: REWRITE_FUTURE_TO_PRESENT_CONTEXT, question: "1. ὁ ἀνὴρ τὸν ἀγρὸν <b>ἀρώσει (ο)</b> ___", answer: "ὁ ἀνὴρ τὸν ἀγρὸν ἀροῖ" },
    { section: "μελέτημα βʹ", sectionLabel: SECTION_2_LABEL, context: REWRITE_FUTURE_TO_PRESENT_CONTEXT, question: "2. ἡ θεὸς δεινὸν <b>ποιήσεται (ε)</b> ___", answer: "ἡ θεὸς δεινὸν ποιεῖται" },
    { section: "μελέτημα βʹ", sectionLabel: SECTION_2_LABEL, context: REWRITE_FUTURE_TO_PRESENT_CONTEXT, question: "3. οἱ ἄνδρες τᾱ̀ς γυναῖκας <b>φιλήσουσι (ε)</b> ___", answer: "οἱ ἄνδρες τᾱ̀ς γυναῖκας φιλοῦσιν" },
    { section: "μελέτημα βʹ", sectionLabel: SECTION_2_LABEL, context: REWRITE_FUTURE_TO_PRESENT_CONTEXT, question: "4. ὁ μαθητὴς τὸν διδάσκαλον <b>ἐρωτήσει (α)</b> ___", answer: "ὁ μαθητὴς τὸν διδάσκαλον ἐρωτᾷ" },
    { section: "μελέτημα βʹ", sectionLabel: SECTION_2_LABEL, context: REWRITE_FUTURE_TO_PRESENT_CONTEXT, question: "5. ὁ διδάσκαλος τῷ μαθητῇ τὸ πρόβλημα <b>δηλώσει (ο)</b> ___", answer: "ὁ διδάσκαλος τῷ μαθητῇ τὸ πρόβλημα δηλοῖ" },

    // Section 3: Fill in Future Form (μελέτημα δʹ, 8 questions)
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "1. οἱ μαθηταὶ ___ (σῑγῶ [α])", answer: "σῑγήσουσιν" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "2. ὁ Ἰᾡσᾡων τοῖς τοῦ Αἰήτου βουσὶ τὸν ἀγρὸν ___ (ἀρῶ [ο])", answer: "ἀρώσει" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "3. τρεῖς βόες ἐπὶ τὸν Ἰᾡσᾡονα ___ (ἐξορμῶ [α])", answer: "ἐξορμήσουσιν" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "4. ὁ Ἰᾡσᾡων πρὸς τοὺς βοῦς ___ (προσχωρῶ [ε])", answer: "προσχωρήσει" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "5. ὁ ἥρως, τοῖς ὁπλῑ́τῑ́αις μαχόμενος, οὐ ___ (φοβοῦμαι [ε])", answer: "φοβήσεται" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "6. οὕτως ___ (τελευτῶ [α]) ἡ μάχη", answer: "τελευτήσει" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "7. ἐγώ τοὺς πολεμίους ___ (νῑκῶ [α])", answer: "νῑκήσω" },
    { section: "μελέτημα δʹ", sectionLabel: SECTION_3_LABEL, context: FILL_FUTURE_FORM_E4_CONTEXT, question: "8. ὁ Ἰᾡσᾡων μετὰ τῶν ἑταίρων ἀπὸ τῆς Κόλχιδος ___ (ἀποπλέω [ε])", answer: "ἀποπλήσει" },

    // Section 4: Rewrite Present to Future (μελέτημα εʹ, 6 questions)
    { section: "μελέτημα εʹ", sectionLabel: SECTION_4_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT, question: "1. ἡ Μήδεια τὸν Ἰᾡσᾡονα τῇ ἀλοιφῇ <b>ἀλείφει</b> ___", answer: "ἡ Μήδεια τὸν Ἰᾡσᾡονα τῇ ἀλοιφῇ ἀλείψει" },
    { section: "μελέτημα εʹ", sectionLabel: SECTION_4_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT, question: "2. οἱ ἑταῖροι τὴν ὄρνῑθα ἐκ τῆς νεὼς <b>ἐκπέμπουσι</b> ___", answer: "οἱ ἑταῖροι τὴν ὄρνῑθα ἐκ τῆς νεὼς ἐκπέμψουσι" },
    { section: "μελέτημα εʹ", sectionLabel: SECTION_4_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT, question: "3. ὁ Ἑρμῆς τὸν Θρασύμαχον <b>λείπει</b> ___", answer: "ὁ Ἑρμῆς τὸν Θρασύμαχον λείψει" },
    { section: "μελέτημα εʹ", sectionLabel: SECTION_4_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT, question: "4. τὸ πῦρ λαμπρότατα <b>λάμπει</b> ___", answer: "τὸ πῦρ λαμπρότατα λάμψει" },
    { section: "μελέτημα εʹ", sectionLabel: SECTION_4_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT, question: "5. τὸ πρόβατον ἀπὸ τοῦ ποιμένος <b>ἀποτρέπει</b> ___", answer: "τὸ πρόβατον ἀπὸ τοῦ ποιμένος ἀποτρέψει" },
    { section: "μελέτημα εʹ", sectionLabel: SECTION_4_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E5_CONTEXT, question: "6. οἱ κύνες τοῖς ποιμέσι <b>ἕπονται</b> ___", answer: "οἱ κύνες τοῖς ποιμέσι ἕψονται" },

    // Section 5: Rewrite Present to Future (μελέτημα Ϛʹ, 6 questions)
    { section: "μελέτημα Ϛʹ", sectionLabel: SECTION_5_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT, question: "1. σύ, ὦ φίλε, πολλοὺς κύνας <b>ἔχεις</b> ___", answer: "σύ, ὦ φίλε, πολλοὺς κύνας ἕξεις" },
    { section: "μελέτημα Ϛʹ", sectionLabel: SECTION_5_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT, question: "2. ῡ̔μεῖς ταῖς γυναιξὶ τὰ δῶρα <b>παρέχετε</b> ___", answer: "ῡ̔μεῖς ταῖς γυναιξὶ τὰ δῶρα παρέξετε" },
    { section: "μελέτημα Ϛʹ", sectionLabel: SECTION_5_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT, question: "3. ὁ ἄναξ <b>ἄρχεται</b> τῆς μάχης ___", answer: "ὁ ἄναξ ἄρξεται τῆς μάχης" },
    { section: "μελέτημα Ϛʹ", sectionLabel: SECTION_5_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT, question: "4. τί <b>πράττεις</b>, ὦ ἄνερ; ___", answer: "τί πράξεις, ὦ ἄνερ;" },
    { section: "μελέτημα Ϛʹ", sectionLabel: SECTION_5_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT, question: "5. ἡ γυνὴ τῷ ἀνδρὶ <b>διαλέγεται</b> ___", answer: "ἡ γυνὴ τῷ ἀνδρὶ διαλέξεται" },
    { section: "μελέτημα Ϛʹ", sectionLabel: SECTION_5_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E6_CONTEXT, question: "6. ὁ Κέρβερος τοὺς νεκροὺς <b>φυλάττει</b> ___", answer: "ὁ Κέρβερος τοὺς νεκροὺς φυλάξει" },

    // Section 6: Rewrite Present to Future (μελέτημα ζʹ, 5 questions)
    { section: "μελέτημα ζʹ", sectionLabel: SECTION_6_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E7_CONTEXT, question: "1. ἡ θυγάτηρ τὸν πατέρα πρὸς τὴν πόλιν βαδίζειν <b>πείθει</b> ___", answer: "ἡ θυγάτηρ τὸν πατέρα πρὸς τὴν πόλιν βαδίζειν πείσει" },
    { section: "μελέτημα ζʹ", sectionLabel: SECTION_6_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E7_CONTEXT, question: "2. ὁ Ζεὺς τοὺς κακοὺς τε καὶ πονηροὺς <b>κολάζει</b> ___", answer: "ὁ Ζεὺς τοὺς κακοὺς τε καὶ πονηροὺς κολάσει" },
    { section: "μελέτημα ζʹ", sectionLabel: SECTION_6_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E7_CONTEXT, question: "3. οἱ δοῦλοι τοῖς δεσπόταις <b>πείθονται</b> ___", answer: "οἱ δοῦλοι τοῖς δεσπόταις πείσονται" },
    { section: "μελέτημα ζʹ", sectionLabel: SECTION_6_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E7_CONTEXT, question: "4. ὁ ἄναξ τοὺς πολῑ́τῑ́ᾱς τὰ δῶρα παρέχειν <b>ἀναγκάζει</b> ___", answer: "ὁ ἄναξ τοὺς πολῑ́τῑ́ᾱς τὰ δῶρα παρέχειν ἀναγκάσει" },
    { section: "μελέτημα ζʹ", sectionLabel: SECTION_6_LABEL, context: REWRITE_PRESENT_TO_FUTURE_E7_CONTEXT, question: "5. ὁ ἥρως τοὺς ἑταίρους <b>σῴζει</b> ___", answer: "ὁ ἥρως τοὺς ἑταίρους σῴσει" },

    // Section 7: Fill in Future Form (μελέτημα θʹ, 5 questions)
    { section: "μελέτημα θʹ", sectionLabel: SECTION_7_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "1. ὁ πόλεμος τοὺς ἀγροὺς καὶ τᾱ̀ς πόλεις ___ (διαφθείρω)", answer: "διαφθερεῖ" },
    { section: "μελέτημα θʹ", sectionLabel: SECTION_7_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "2. οἱ στρατιῶται τοὺς πολεμίους ἐν τῇ μάχῃ ___ (ἀποκτείνω)", answer: "ἀποκτενοῦσιν" },
    { section: "μελέτημα θʹ", sectionLabel: SECTION_7_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "3. ὁ σπουδαῖος μαθητὴς ἀεὶ καλῶς ___ (ἀποκρῑ́νομαι) τῷ διδασκάλῳ", answer: "ἀποκρινεῖται" },
    { section: "μελέτημα θʹ", sectionLabel: SECTION_7_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "4. ὁ ἄγγελος, ὃν οἱ Ἀθηναῖοι πέμπουσιν, τὴν νῑ́κῑην ___ (ἀγγέλλω)", answer: "ἀγγελεῖ" },
    { section: "μελέτημα θʹ", sectionLabel: SECTION_7_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "5. οἱ καλοὶ στρατιῶται οὐ φεύξουσιν ἀπὸ τῆς μάχης, ἀλλὰ ___ (μένω)", answer: "μενοῦσιν" },

    // Section 8: Answer in Future Tense (μελέτημα ιʹ, 8 questions)
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "1. ἆρ'ἤδη μανθάνεις τὸ πρόβλημα; ___", answer: "οὔπω μὲν μανθάνω τὸ πρόβλημα, δι'ὀλίγου δὲ μαθήσομαι" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "2. ἆρ'ἤδη σῑγᾷ τὰ παιδία; ___", answer: "οὔπω μὲν σῑγᾷ τὰ παιδία, δι'ὀλίγου δὲ σῑγήσεται" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "3. ἆρ'ἤδη νέμουσι τὰ πρόβατα οἱ ποιμένες; ___", answer: "οὔπω μὲν νέμουσι τὰ πρόβατα οἱ ποιμένες, δι'ὀλίγου δὲ νεμοῦνται" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "4. ἆρ'ἤδη ἐνδύει ὁ παῖς τὰ ῑ̔μάτια; ___", answer: "οὔπω μὲν ἐνδύει ὁ παῖς τὰ ῑ̔μάτια, δι'ὀλίγου δὲ ἐνδύσεται" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "5. ἆρ'ἤδη γιγνώσκει ὁ Θρασύμαχος τὴν Πῡθίᾱν; ___", answer: "οὔπω μὲν γιγνώσκει ὁ Θρασύμαχος τὴν Πῡθίᾱν, δι'ὀλίγου δὲ γνώσεται" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "6. ἆρ'ἤδη γέρων ἐστὶ ὁ τοῦ Θρασυμάχου πατήρ; ___", answer: "οὔπω μὲν γέρων ἐστὶ ὁ τοῦ Θρασυμάχου πατήρ, δι'ὀλίγου δὲ ἔσται" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "7. ἆρ'ἤδη γελῶσιν οἱ τὴν κωμῳδίᾱν ὁρῶντες; ___", answer: "οὔπω μὲν γελῶσιν οἱ τὴν κωμῳδίᾱν ὁρῶντες, δι'ὀλίγου δὲ γελάσονται" },
    { section: "μελέτημα ιʹ", sectionLabel: SECTION_8_LABEL, context: ANSWER_FUTURE_TENSE_E10_CONTEXT, question: "8. ἆρ'ἤδη καταβαίνεις εἰς Ἅιδου ἅμα τῷ Θρασυμάχῳ; ___", answer: "οὔπω μὲν καταβαίνω εἰς Ἅιδου ἅμα τῷ Θρασυμάχῳ, δι'ὀλίγου δὲ καταβήσομαι" },

    // Section 9: Make Phrases in Future Tense (μελέτημα ιαʹ, 5 questions)
    { section: "μελέτημα ιαʹ", sectionLabel: SECTION_9_LABEL, context: MAKE_PHRASES_FUTURE_E11_CONTEXT, question: "1. ὁ Ἀγαμέμνων + ἡ Κασσάνδρᾱ + ἀπό + ἡ Τροίᾱ + κομίζω ___", answer: "ὁ Ἀγαμέμνων τὴν Κασσάνδρᾱν ἀπὸ τῆς Τροίᾡς κομιεῖ" },
    { section: "μελέτημα ιαʹ", sectionLabel: SECTION_9_LABEL, context: MAKE_PHRASES_FUTURE_E11_CONTEXT, question: "2. ἡ γυνή + ὁ ἀνήρ + βλέπειν + ἐλπίζω ___", answer: "ἡ γυνὴ τὸν ἄνδρα βλέπειν ἐλπιεῖ" },
    { section: "μελέτημα ιαʹ", sectionLabel: SECTION_9_LABEL, context: MAKE_PHRASES_FUTURE_E11_CONTEXT, question: "3. ἡ Πῡθίᾡ + οἱ ἄνθρωποι + ἐν + οἱ Δελφοί + θεσπίζω ___", answer: "ἡ Πῡθίᾡ τοῖς ἀνθρώποις ἐν τοῖς Δελφοῖς θεσπιεῖ" },
    { section: "μελέτημα ιαʹ", sectionLabel: SECTION_9_LABEL, context: MAKE_PHRASES_FUTURE_E11_CONTEXT, question: "4. οἱ ναῦται + οἱ ξένοι + αἱ νῆες + κομίζω ___", answer: "οἱ ναῦται τοὺς ξένους ταῖς ναυσὶ κομιοῦσι" },
    { section: "μελέτημα ιαʹ", sectionLabel: SECTION_9_LABEL, context: MAKE_PHRASES_FUTURE_E11_CONTEXT, question: "5. ὁ ἄναξ + ὅς + πλούσιος, ᾱ, ον + εἰμί + ὑβρίζω ___", answer: "ὁ ἄναξ, ὃς πλούσιός ἐστι, ὑβριεῖ" },

    // Section 10: Fill in Future Form (μελέτημα ιβʹ, 5 questions)
    { section: "μελέτημα ιβʹ", sectionLabel: SECTION_10_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "1. ὁ Θρασύμαχος εἰς Ἅιδου ___ (καταβαίνω)", answer: "καταβήσεται" },
    { section: "μελέτημα ιβʹ", sectionLabel: SECTION_10_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "2. ὁ Ἰᾡσᾡων τὴν γραῦν διὰ τοῦ ποταμοῦ ___ (φέρω)", answer: "οἴσει" },
    { section: "μελέτημα ιβʹ", sectionLabel: SECTION_10_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "3. οἱ λέοντες ἐπὶ τοὺς κύνας ___ (ἐπιτρέχω)", answer: "ἐπιδραμοῦνται" },
    { section: "μελέτημα ιβʹ", sectionLabel: SECTION_10_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "4. οἱ στρατιῶται τοῖς πολεμίοις ___ (μάχονται)", answer: "μαχήσονται" },
    { section: "μελέτημα ιβʹ", sectionLabel: SECTION_10_LABEL, context: FILL_FUTURE_FORM_E12_CONTEXT, question: "5. ὁ Θρασύμαχος τὸν Αἰακὸν ἐρωτᾷ: 'τίνα νῦν ἡμεῖς, ὦ Αἰακέ, ___' (ὁρῶ [α])", answer: "ὀψόμεθα" },

    // Section 11: Rewrite Present Participles/Infinitives to Future (μελέτημα ιγʹ, 7 questions)
    { section: "μελέτημα ιγʹ", sectionLabel: SECTION_11_LABEL, context: REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT, question: "1. ὁ Ξέρξης, πολλοὺς ἀνθρώπους ἐν τῇ Ἀσίᾳ <b>δουλοῦν</b>, βασιλεὺς ἔσται ___", answer: "ὁ Ξέρξης, πολλοὺς ἀνθρώπους ἐν τῇ Ἀσία δουλώσων, βασιλεὺς ἔσται" },
    { section: "μελέτημα ιγʹ", sectionLabel: SECTION_11_LABEL, context: REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT, question: "2. ὁ ἄγγελος ἥκει, τὴν νῑ́κῑην <b>ἀγγέλλων</b> ___", answer: "ὁ ἄγγελος ἥκει, τὴν νῑ́κῑην ἀγγελῶν" },
    { section: "μελέτημα ιγʹ", sectionLabel: SECTION_11_LABEL, context: REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT, question: "3. μάχεσθε, ὦ στρατιῶται, τὸν πολέμιον <b>ἀμῡνόμενοι</b> ___", answer: "μάχεσθε, ὦ στρατιῶται, τὸν πολέμιον ἀμυνούμενοι" },
    { section: "μελέτημα ιγʹ", sectionLabel: SECTION_11_LABEL, context: REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT, question: "4. ὁ διδάσκαλος τὸν μαθητὴν τὰ ῥήματα <b>ἀναγιγνώσκειν</b> κελεύει ___", answer: "ὁ διδάσκαλος τὸν μαθητὴν τὰ ῥήματα ἀναγνώσεσθαι κελεύει" },
    { section: "μελέτημα ιγʹ", sectionLabel: SECTION_11_LABEL, context: REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT, question: "5. ὁ Αἰακὸς καὶ ὁ Θρασύμαχος <b>διαλεγόμενοι</b> πρὸς ἄλλο τι μέρος τῆς Ἅιδου ἀφικνοῦνται ___", answer: "ὁ Αἰακὸς καὶ ὁ Θρασύμαχος διαλεξόμενοι πρὸς ἄλλο τι μέρος τῆς Ἅιδου ἀφικνοῦνται" },
    { section: "μελέτημα ιγʹ", sectionLabel: SECTION_11_LABEL, context: REWRITE_PARTICIPLES_INFINITIVES_E13_CONTEXT, question: "6. τούτῳ τῷ τόξῳ ἔξεστι τῷ Ἀχιλλεῖ τοὺς βασιλέᾡς <b>ἀποκτείνειν</b> ___", answer: "τούτῳ τῷ τόξῳ ἔξεστι τῷ Ἀχιλλεῖ τοὺς βασιλέᾡς ἀποκτενεῖν" },

    // Section 12: Thrasymachus’ Questions (μελέτημα ιδʹ, 6 questions)
    { section: "μελέτημα ιδʹ", sectionLabel: SECTION_12_LABEL, context: THRASYMACUS_QUESTIONS_E14_CONTEXT, question: "1. τίνι διαλέξεται ὁ Θρασύμαχος; ___", answer: "ὁ Θρασύμαχος τῇ ἱερείᾳ (τῇ Πῡθιᾳ) διαλέξεται" },
    { section: "μελέτημα ιδʹ", sectionLabel: SECTION_12_LABEL, context: THRASYMACUS_QUESTIONS_E14_CONTEXT, question: "2. τί ῥῆμά ἐστιν 'ἔσομαι'; ___", answer: "εἰμί" },
    { section: "μελέτημα ιδʹ", sectionLabel: SECTION_12_LABEL, context: THRASYMACUS_QUESTIONS_E14_CONTEXT, question: "3. τί ῥῆμά ἐστιν 'ὄψομαι'; ___", answer: "ὁρῶ (α)" },
    { section: "μελέτημα ιδʹ", sectionLabel: SECTION_12_LABEL, context: THRASYMACUS_QUESTIONS_E14_CONTEXT, question: "4. τί ῥῆμά ἐστιν 'ἀποκτενῶ'; ___", answer: "ἀποκτείνω" },
    { section: "μελέτημα ιδʹ", sectionLabel: SECTION_12_LABEL, context: THRASYMACUS_QUESTIONS_E14_CONTEXT, question: "5. τί ῥῆμά ἐστιν 'γενήσομαι'; ___", answer: "γίγνομαι" },
    { section: "μελέτημα ιδʹ", sectionLabel: SECTION_12_LABEL, context: THRASYMACUS_QUESTIONS_E14_CONTEXT, question: "6. τί ῥῆμά ἐστιν 'γαμήσω'; ___", answer: "γαμῶ (ε)" }
];