// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');
// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
{id: '1', content: '<a href="https://answersingenesis.org/bible-timeline/timeline-for-the-flood/"  target="iframe_a">Creation</a>', start: '-004004',className:''},
{id: '2', content: 'Fall in the Garden', start: '-004003',className:'church'},
{id: '3', content: '<a href="http://www.truthnet.org/Genesis/8-Genesis-Chapter-4/Adam-Eve-Timeline.jpg"  target="iframe_a">Cain and Abel</a>', start: '-003900',className:'church'},
{id: '4', content: 'Adam became the father of Seth', start: '-003874',className:'church'},
{id: '5', content: 'Seth became the father of Enosh', start: '-003769',className:'church'},
{id: '6', content: 'Enosh became the father of Kenan', start: '-003679',className:'church'},
{id: '7', content: 'Cainan became the father of Mahalalel', start: '-003609',className:'church'},
{id: '8', content: 'Mahalalel became the father of Jared', start: '-003544',className:'church'},
{id: '9', content: 'Jared became the father of Enoch', start: '-003382',className:'church'},
{id: '10', content: 'Enoch became the father of Methuselah', start: '-003317',className:'church'},
{id: '11', content: 'Methuselah became the father of Lamech', start: '-003130',className:'church'},
{id: '12', content: 'Lamech became the father of Noah', start: '-002948',className:'church'},
{id: '13', content: '<a href="https://answersingenesis.org/bible-timeline/timeline-for-the-flood/"  target="iframe_a">The Flood</a>', start: '-002348',className:'church'},
{id: '14', content: '<a href="https://answersingenesis.org/tower-of-babel/was-the-dispersion-at-babel-a-real-event/"  target="iframe_a">The Tower of Babel</a>', start: '-002242',className:'church'},
{id: '15', content: '<a href="https://en.wikipedia.org/wiki/Early_Dynastic_Period_(Egypt)"  target="iframe_a">Unification of Upper and Lower Egypt?</a>', start: '-003000',className:'rise_fall'},
{id: '16', content: '<a href="https://en.wikipedia.org/wiki/History_of_ancient_Egypt#Old_Kingdom"  target="iframe_a">The Old Kingdom in Egypt?</a>', start: '-002686',className:'rise_fall'},
{id: '17', content: '<a href="https://en.wikipedia.org/wiki/Indus_Valley_Civilization"  target="iframe_a">Indus Valley Civilization?</a>', start: '-002600',className:'rise_fall'},
{id: '18', content: '<a href="http://www.timemaps.com/civilization/Minoan-civilization"  target="iframe_a">Ancient Crete and Minoan Civilization</a>', start: '-002000',className:'rise_fall'},
{id: '19', content: '<a href="http://www.mesopotamia.co.uk/time/explore/frame_sum.html"  target="iframe_a">Sargon The Great Unites Sumer and Akkad</a>', start: '-002300',className:'rulers'},
{id: '20', content: 'God’s Covenant With Abraham', start: '-002082',className:'church'},
{id: '21', content: 'Hagar and Ishmael', start: '-002052',className:'church'},
{id: '22', content: 'Sodom and Gomorrah', start: '-002085',className:'church'},
{id: '23', content: '<a href="http://biblehub.com/timeline/"  target="iframe_a">Birth of Isaac</a>', start: '-002066',className:'church'},
{id: '24', content: '<a href="http://biblehub.com/timeline/"  target="iframe_a">Sacrifice of Isaac</a>', start: '-002054',className:'church'},
{id: '25', content: '<a href="https://en.wikipedia.org/wiki/Middle_Kingdom_of_Egypt"  target="iframe_a">The Middle Kingdom in Egypt</a>', start: '-002055',className:'rise_fall'},
{id: '26', content: 'Joseph is a Slave', start: '-001898',className:'church'},
{id: '27', content: 'Famine in Egypt', start: '-001891',className:'church'},
{id: '28', content: 'Twelve Tribes of Israel', start: '-001860',className:'church'},
{id: '29', content: '<a href="https://en.wikipedia.org/wiki/Babylon"  target="iframe_a">Babylon and the Code of Hammurabi</a>', start: '-001894',className:'political'},
{id: '30', content: '<a href="http://www.britannica.com/topic/Shang-dynasty"  target="iframe_a">Shang Dynasty in China</a>', start: '-001760',className:'political'},
{id: '31', content: '<a href="https://en.wikipedia.org/wiki/1720s_BC"  target="iframe_a">Hyksos Invade Egypt</a>', start: '-001720',className:'war'},
{id: '32', content: '<a href="https://en.wikipedia.org/wiki/Hittites"  target="iframe_a">The Hittite Empire</a>', start: '-001600',className:'political'},
{id: '33', content: '<a href="https://en.wikipedia.org/wiki/New_Kingdom_of_Egypt"  target="iframe_a">Early New Kingdom in Egypt</a>', start: '-001570',className:'political'},
{id: '34', content: '<a href="https://en.wikipedia.org/wiki/Olmecs | https://en.wikipedia.org/wiki/Zapotec_civilization"  target="iframe_a">Olmecs and Zapotecs in South America</a>', start: '-001500',className:''},
{id: '35', content: '<a href="https://answersingenesis.org/bible-characters/moses/searching-for-moses/"  target="iframe_a">Moses, The Plagues in Egypt</a>', start: '-001446',className:'church'},
{id: '36', content: '<a href="https://answersingenesis.org/bible-characters/moses/searching-for-moses/"  target="iframe_a">The Exodus</a>', start: '-001446',className:'church'},
{id: '37', content: 'Ten Commandments', start: '-001446',className:'church'},
{id: '38', content: '<a href="https://en.wikipedia.org/wiki/Mycenaean_Greece"  target="iframe_a">Mycenaean Civilization</a>', start: '-001600',className:''},
{id: '39', content: '<a href="https://en.wikipedia.org/wiki/Akhenaten"  target="iframe_a">Amenhotep IV</a>', start: '-001350',className:'rulers'},
{id: '40', content: '<a href="https://en.wikipedia.org/wiki/Tutankhamun"  target="iframe_a">Tutankhamen Reigns in Egypt</a>', start: '-001332',className:'rulers'},
{id: '41', content: '<a href="https://en.wikipedia.org/wiki/New_Kingdom_of_Egypt"  target="iframe_a">Later New Kingdom in Egypt</a>', start: '-001700',className:'rise_fall'},
{id: '42', content: '<a href="http://www.classics.upenn.edu/myth/php/homer/index.php?page=trojan"  target="iframe_a">Trojan War</a>', start: '-001250',className:'war'},
{id: '43', content: '<a href="http://www.omniglot.com/writing/phoenician.htm"  target="iframe_a">The Phoenicians and the Alphabet</a>', start: '-001000',className:''},
{id: '44', content: 'Davidic Kingdom', start: '-001003',className:'rulers'},
{id: '45', content: '<a href="https://en.wikipedia.org/wiki/Solomon"  target="iframe_a">Solomon’s Reign</a>', start: '-000970',className:'rulers'},
{id: '46', content: '<a href="http://www.jewishvirtuallibrary.org/jsource/History/Kingdoms1.html"  target="iframe_a">Israel Divides Into Two Nations</a>', start: '-000922',className:'church'},
{id: '47', content: '<a href="http://pages.simonandschuster.com/iliad/timeline"  target="iframe_a">Homer and Greek Mythology</a>', start: '-000670',className:''},
{id: '48', content: '<a href="https://en.wikipedia.org/wiki/Timeline_of_ancient_Greece#Archaic_Greece"  target="iframe_a">The Olympics</a>', start: '-000776',className:''},
{id: '49', content: 'The Founding of Rome', start: '-000753',className:'rise_fall'},
{id: '50', content: '<a href="https://en.wikipedia.org/wiki/Direct_democracy"  target="iframe_a">Democracy Begins In Greece</a>', start: '-000500',className:'political'},
{id: '51', content: '<a href="http://www.biblechronologytimeline.com/biblechronologytimeline7.html"  target="iframe_a">God’s Prophets Warn His People</a>', start: '-000800',className:'church'},
{id: '52', content: '<a href="http://www.thefamouspeople.com/profiles/confucius-84.php"  target="iframe_a">Confucius</a>', start: '-000519',className:''},
{id: '53', content: '<a href="http://www.bible-history.com/map_fall_of_judah/fallofjudah_timeline_of_events.html"  target="iframe_a">Israel and Judah Fall to Assyria and Babylon</a>', start: '-000605',className:'church'},
{id: '54', content: '<a href="http://www.ancient.eu/timeline/Nebuchadnezzar_II/"  target="iframe_a">Nebuchadnezzar of Babylon</a>', start: '-000605',className:'church'},
{id: '55', content: '<a href="http://www.bible-history.com/map_babylonian_captivity/map_of_the_deportation_of_judah_timeline_of_events.html"  target="iframe_a">Jews in Exile</a>', start: '-000605',className:'church'},
{id: '56', content: '<a href="http://www.ancient.eu/timeline/Persia/"  target="iframe_a">The Persian Empire</a>', start: '-000750',className:'rise_fall'},
{id: '57', content: '<a href="https://en.wikipedia.org/wiki/Greek_Dark_Ages"  target="iframe_a">End of the Greek Dark Ages</a>', start: '-000800',className:''},
{id: '58', content: '<a href="https://en.wikipedia.org/wiki/Classical_Greece"  target="iframe_a">Classical Greece Begins</a>', start: '-000510',className:'rise_fall'},
{id: '59', content: '<a href="https://en.wikipedia.org/wiki/Roman_Republic"  target="iframe_a">Roman Republic Founded</a>', start: '-000509',className:'rise_fall'},
{id: '60', content: '<a href="www.britannica.com/event/Greco-Persian-Wars"  target="iframe_a">Greco-Persian Wars</a>', start: '-000492',className:'war'},
{id: '61', content: '<a href="http://www.ancient.eu/timeline/Peloponnesian_War/"  target="iframe_a">Pericles and the Peloponnesian War</a>', start: '-000460',className:'war'},
{id: '62', content: '<a href="http://www.ancient.eu/timeline/socrates/"  target="iframe_a">Socrates</a>', start: '-000407',className:''},
{id: '63', content: '<a href="http://www.ancient.eu/timeline/plato/"  target="iframe_a">Plato</a>', start: '-000380',className:''},
{id: '64', content: '<a href="http://www.ancient.eu/timeline/aristotle/"  target="iframe_a">Aristotle</a>', start: '-000347',className:''},
{id: '65', content: 'Nehemiah and The Return of the Jews', start: '-000445',className:'political'},
{id: '66', content: '<a href="https://en.wikipedia.org/wiki/Alexander_the_Great"  target="iframe_a">Alexander The Great Conqueror</a>', start: '-000334',className:'political'},
{id: '67', content: '<a href="http://www.chinatour360.com/greatwall/history/chronology.htm"  target="iframe_a">The Han Dynasty and the Great Wall of China</a>', start: '-000685',className:'political'},
{id: '68', content: '<a href="https://en.wikipedia.org/wiki/Timeline_of_Roman_history#6th_century_BC"  target="iframe_a">The Rise of Rome</a>', start: '-001461',className:'rise_fall'},
{id: '69', content: '<a href="http://www.softschools.com/timelines/julius_caesar_timeline/33/"  target="iframe_a">Reign of Julius Caesar</a>', start: '-000073',className:'rulers'},
{id: '70', content: 'Egypt Falls to the Roman Empire', start: '-000012-8-30',className:'political'},
{id: '71', content: 'Reign of Caesar Augustus', start: '-000027-1-16',className:'rulers'},
{id: '72', content: 'Jesus Christ is Born', start: '0001',className:'birth_death'},
{id: '73', content: 'Ministry of John the Baptist', start: '0030',className:'church'},
{id: '74', content: 'Ministry of Christ', start: '0030',className:'church'},
{id: '75', content: 'Crucifixion, Resurrection, and Ascension of Christ', start: '0033',className:'birth_death'},
{id: '76', content: '<a href="https://en.wikipedia.org/wiki/Nero"  target="iframe_a">Nero Fiddles, Rome Burns, Christians Die</a>', start: '0064',className:'rise_fall'},
{id: '77', content: '<a href="http://www.eyewitnesstohistory.com/jewishtemple.htm"  target="iframe_a">Romans Destroy Jerusalem</a>', start: '0070',className:'rise_fall'},
{id: '78', content: '<a href="https://www.history.com/topics/ancient-history/pompeii"  target="iframe_a">Mount Vesuvius Erupts, Pompeii Buried</a>', start: '0079',className:'rise_fall'},
{id: '79', content: '<a href="https://edhelper.com/ReadingComprehension_42_91.html"  target="iframe_a">Diocletian Divides the Roman Empire</a>', start: '0284-11',className:'political'},
{id: '80', content: '<a href="https://simple.wikipedia.org/wiki/Edict_of_Milan"  target="iframe_a">Constantine and the Edict of Milan</a>', start: '0313',className:'church'},
{id: '81', content: '<a href="https://www.papalencyclicals.net/Councils/ecum01.htm"  target="iframe_a">The First Council of Nicea</a>', start: '0325',className:'councils'},
{id: '82', content: '<a href="https://www.britannica.com/biography/Saint-Augustine"  target="iframe_a">St. Augustine of Hippo</a>', start: '0396',className:'church'},
{id: '83', content: '<a href="https://en.wikipedia.org/wiki/Jerome"  target="iframe_a">St. Jerome Completes the Vulgate</a>', start: '0405',className:'church'},
{id: '84', content: '<a href="https://en.wikipedia.org/wiki/Sack_of_Rome_(410)"  target="iframe_a">Barbarians Invade, Rome Sacked</a>', start: '0410',className:'war'},
{id: '85', content: '<a href="https://en.wikipedia.org/wiki/Saint_Patrick"  target="iframe_a">St. Patrick Brings Christianity to Ireland</a>', start: '0400',className:'church'},
{id: '86', content: '<a href="https://en.wikipedia.org/wiki/Council_of_Chalcedon"  target="iframe_a">The Council of Chalcedon</a>', start: '0451-10-8',className:'councils'},
{id: '87', content: '<a href="https://en.wikipedia.org/wiki/Attila"  target="iframe_a">Attila the Hun Defeated</a>', start: '0453',className:'birth_death'},
{id: '88', content: '<a href="http://www.historymuseum.ca/cmc/exhibitions/civil/maya/mmc09eng.shtml"  target="iframe_a">Mayan Civilization</a>', start: '-001800',className:'political'},
{id: '89', content: '<a href="https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire"  target="iframe_a">End of the Western Roman Empire</a>', start: '0476',className:'political'},
{id: '90', content: '<a href="https://en.wikipedia.org/wiki/Justinian_I"  target="iframe_a">The Byzantine Empire and Justinian the Great</a>', start: '0527',className:'political'},
{id: '91', content: '<a href="http://www.christianitytoday.com/ch/1990/issue28/2817.html"  target="iframe_a">St. Benedict and Monasticism</a>', start: '0540',className:'church'},
{id: '92', content: '<a href="https://en.wikipedia.org/wiki/Timeline_of_7th-century_Muslim_history"  target="iframe_a">Mohammed and Islam</a>', start: '0610',className:'church'},
{id: '93', content: '<a href="https://en.wikipedia.org/wiki/Pepin_the_Short"  target="iframe_a">Pepin the Short</a>', start: '0751',className:'political'},
{id: '94', content: '<a href="https://www.history.com/topics/charlemagne"  target="iframe_a">Charlemagne</a>', start: '0800-12-25',className:'political'},
{id: '95', content: '<a href="https://en.wikipedia.org/wiki/Charles_Martel#Civil_war_of_715%E2%80%93718"  target="iframe_a">Charles Martel</a>', start: '0715',className:'political'},
{id: '96', content: '<a href="https://en.wikipedia.org/wiki/Viking_Age"  target="iframe_a">Viking Invasions</a>', start: '0800',className:'political'},
{id: '97', content: '<a href="https://en.wikipedia.org/wiki/Alfred_the_Great"  target="iframe_a">Alfred the Great</a>', start: '0871',className:'rulers'},
{id: '98', content: '<a href="https://en.wikipedia.org/wiki/Holy_Roman_Empire#French_Revolutionary_Wars_and_final_dissolution"  target="iframe_a">Otto I and the Holy Roman Empire</a>', start: '0800-12-25',className:'rulers'},
{id: '99', content: '<a href="https://www.history.com/topics/exploration/leif-eriksson"  target="iframe_a">Leif Erikson Sails to North America</a>', start: '1000',className:'exploration'},
{id: '100', content: '<a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism"  target="iframe_a">The Church Splits</a>', start: '1054',className:'church'},
{id: '101', content: '<a href="http://www.historyworld.net/wrldhis/PlainTextHistories.asp?historyid=ac35"  target="iframe_a">The Feudal System</a>', start: '0900',className:'political'},
{id: '102', content: '<a href="http://www.history.com/this-day-in-history/the-battle-of-hastings"  target="iframe_a">William the Conqueror and the Battle of Hastings</a>', start: '1066-10-14',className:'war'},
{id: '103', content: '<a href="https://en.wikipedia.org/wiki/Cathedral#Origins_and_characteristics_of_the_first_cathedrals"  target="iframe_a">Cathedrals in Europe</a>', start: '0313',className:'church'},
{id: '104', content: '<a href="http://usna.edu/Users/history/abels/hh315/crusades_timeline.htm"  target="iframe_a">The Crusades and The Middle Ages</a>', start: '0753',className:'war'},
{id: '105', content: '<a href="https://en.wikipedia.org/wiki/Francis_of_Assisi"  target="iframe_a">St. Francis of Assisi</a>', start: '1204',className:'church'},
{id: '106', content: '<a href="https://en.wikipedia.org/wiki/Genghis_Khan"  target="iframe_a">Genghis Khan and the Mongols</a>', start: '1206',className:'political'},
{id: '107', content: '<a href="https://en.wikipedia.org/wiki/Magna_Carta"  target="iframe_a">The Magna Carta</a>', start: '1215-6-15',className:'political'},
{id: '108', content: '<a href="http://www.biography.com/people/st-thomas-aquinas-9187231#education"  target="iframe_a">St. Thomas Aquinas</a>', start: '1250',className:'church'},
{id: '109', content: '<a href="https://en.wikipedia.org/wiki/Marco_Polo"  target="iframe_a">Marco Polo</a>', start: '1269',className:'exploration'},
{id: '110', content: '<a href="https://en.wikipedia.org/wiki/Hundred_Years%27_War"  target="iframe_a">The Hundred Years War</a>', start: '1337',className:'war'},
{id: '111', content: '<a href="https://en.wikipedia.org/wiki/Black_Death"  target="iframe_a">The Black Death</a>', start: '1346',className:'birth_death'},
{id: '112', content: '<a href="https://en.wikipedia.org/wiki/Joan_of_Arc"  target="iframe_a">Joan of Arc</a>', start: '1431-5-30',className:'church'},
{id: '113', content: '<a href="https://en.wikipedia.org/wiki/John_Wycliffe"  target="iframe_a">John Wycliffe</a>', start: '1361',className:'church'},
{id: '114', content: '<a href="https://en.wikipedia.org/wiki/Jan_Hus#Early_life"  target="iframe_a">John Huss</a>', start: '1400',className:'church'},
{id: '115', content: '<a href="http://www.enchantedlearning.com/explorers/page/h/henry.shtml"  target="iframe_a">Prince Henry the Navigator</a>', start: '1420',className:'exploration'},
{id: '116', content: '<a href="https://en.wikipedia.org/wiki/Fall_of_Constantinople"  target="iframe_a">Fall of Constantinople to Ottoman Turks</a>', start: '1453-5-29',className:'political'},
{id: '117', content: '<a href="http://www.bl.uk/treasures/gutenberg/basics.html"  target="iframe_a">Gutenberg Prints the Bible</a>', start: '1455',className:'church'},
{id: '118', content: '<a href="https://en.wikipedia.org/wiki/Renaissance"  target="iframe_a">The Renaissance</a>', start: '1300',className:'revolutions'},
{id: '119', content: '<a href="https://en.wikipedia.org/wiki/Spanish_Inquisition"  target="iframe_a">Ferdinand, Isabella, and the Spanish Inquisition</a>', start: '1478-11-1',className:'rulers'},
{id: '120', content: '<a href="http://exploration.marinersmuseum.org/subject/bartolomeu-dias/"  target="iframe_a">Dias</a>', start: '1487-8',className:'exploration'},
{id: '121', content: '<a href="https://en.wikipedia.org/wiki/Christopher_Columbus#First_voyage_(1492%E2%80%931493)"  target="iframe_a">Columbus</a>', start: '1492-8-3',className:'exploration'},
{id: '122', content: '<a href="https://en.wikipedia.org/wiki/Amerigo_Vespucci#Voyages_and_alleged_voyages"  target="iframe_a">Amerigo Vespucci</a>', start: '1499',className:'exploration'},
{id: '123', content: '<a href="http://www.enchantedlearning.com/explorers/page/d/dagama.shtml"  target="iframe_a">de Gama</a>', start: '1497-7-8',className:'exploration'},
{id: '124', content: '<a href="http://www.history.com/topics/exploration/juan-ponce-de-leon"  target="iframe_a">de Leon</a>', start: '1493',className:'exploration'},
{id: '125', content: '<a href="https://en.wikipedia.org/wiki/John_Cabot"  target="iframe_a">Cabot</a>', start: '1497',className:'exploration'},
{id: '126', content: '<a href="https://en.wikipedia.org/wiki/Nicolaus_Copernicus#Heliocentrism"  target="iframe_a">Copernicus: The Sun is the Center</a>', start: '1514',className:'scientific_discovery'},
{id: '127', content: '<a href="https://en.wikipedia.org/wiki/Reformation"  target="iframe_a">Martin Luther Begins the Protestant Reformation</a>', start: '1517-10-31',className:'revolutions'},
{id: '128', content: '<a href="https://www.rmg.co.uk/stories/topics/ferdinand-magellan"  target="iframe_a">Magellan Sails Around the World</a>', start: '1519',className:'exploration'},
{id: '129', content: '<a href="https://en.wikipedia.org/wiki/Hern%C3%A1n_Cort%C3%A9s"  target="iframe_a">Cortes</a>', start: '1485',className:'exploration'},
{id: '130', content: '<a href="https://en.wikipedia.org/wiki/Francisco_Pizarro"  target="iframe_a">Pizarro</a>', start: '1509-11-10',className:'exploration'},
{id: '131', content: '<a href="http://academic.mu.edu/meissnerd/ivan-terrible.htm"  target="iframe_a">Ivan the Terrible Expands Russia</a>', start: '1558',className:'rulers'},
{id: '132', content: '<a href="https://en.wikipedia.org/wiki/Church_of_England"  target="iframe_a">Henry VIII and the Church of England</a>', start: '1534',className:'church'},
{id: '133', content: '<a href="http://www.americaslibrary.gov/jb/colonial/jb_colonial_cartier_1.html"  target="iframe_a">Cartier Sails up the St. Lawrence</a>', start: '1534-6-9',className:'scientific_discovery'},
{id: '134', content: '<a href="https://en.wikipedia.org/wiki/Institutes_of_the_Christian_Religion"  target="iframe_a">John Calvin and The Institutes of the Christian Religion</a>', start: '1536',className:'church'},
{id: '135', content: '<a href="https://en.wikipedia.org/wiki/Council_of_Trent"  target="iframe_a">The Council of Trent and the Counter Reformation</a>', start: '1545',className:'councils'},
{id: '136', content: '<a href="http://www.biography.com/people/queen-elizabeth-i-9286133"  target="iframe_a">Queen Elizabeth I</a>', start: '1558-11-17',className:'rulers'},
{id: '137', content: '<a href="http://absoluteshakespeare.com/trivia/timeline/timeline.htm"  target="iframe_a">William Shakespeare, the “Bard of Avon”</a>', start: '1589',className:'art_music'},
{id: '138', content: '<a href="https://en.wikipedia.org/wiki/Roanoke_Colony"  target="iframe_a">Raleigh Settles Roanoke</a>', start: '1585',className:'founding'},
{id: '139', content: '<a href="http://www.americaslibrary.gov/jb/colonial/jb_colonial_jamestwn_1.html"  target="iframe_a">Jamestown</a>', start: '1607-5-14',className:'founding'},
{id: '140', content: '<a href="https://en.wikipedia.org/wiki/Samuel_de_Champlain"  target="iframe_a">Champlain Founds Quebec</a>', start: '1608',className:'founding'},
{id: '141', content: '<a href="http://users.etown.edu/r/riegerj/media/Timeline.htm"  target="iframe_a">Galileo</a>', start: '1586',className:'scientific_discovery'},
{id: '142', content: '<a href="https://en.wikipedia.org/wiki/Scientific_Revolution"  target="iframe_a">The Scientific Revolution</a>', start: '1543',className:'revolutions'},
{id: '143', content: '<a href="https://en.wikipedia.org/wiki/Plymouth_Colony"  target="iframe_a">The Mayflower Lands at Plymouth</a>', start: '1620',className:'political'},
{id: '144', content: '<a href="https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony"  target="iframe_a">The Puritans of Massachusetts Bay Colony</a>', start: '1628',className:'political'},
{id: '145', content: '<a href="https://en.wikipedia.org/wiki/English_Civil_War"  target="iframe_a">The English Civil War and Oliver Cromwell</a>', start: '1642',className:'war'},
{id: '146', content: '<a href="http://www.ushistory.org/penn/bio.htm"  target="iframe_a">William Penn, Founder of Pennsylvania</a>', start: '1677',className:'founding'},
{id: '147', content: '<a href="https://en.wikipedia.org/wiki/Salem_witch_trials"  target="iframe_a">Salem Witch Trials</a>', start: '1692/2',className:'political'},
{id: '148', content: '<a href="https://en.wikipedia.org/wiki/Atlantic_slave_trade"  target="iframe_a">Slavery and The Triangle of Trade</a>', start: '1450',className:'slavery'},
{id: '149', content: '<a href="https://www.rmg.co.uk/stories/topics/peter-great"  target="iframe_a">Peter the Great, Czar of Russia</a>', start: '1696',className:'rulers'},
{id: '150', content: '<a href="http://www.newworldencyclopedia.org/entry/Age_of_Enlightenment"  target="iframe_a">The Enlightenment</a>', start: '1701',className:'revolutions'},
{id: '151', content: '<a href="https://en.wikipedia.org/wiki/Thirteen_Colonies"  target="iframe_a">13 Colonies Formed</a>', start: '1607',className:'political'},
{id: '152', content: '<a href="https://en.wikipedia.org/wiki/First_Great_Awakening"  target="iframe_a">The First Great Awakening</a>', start: '1730',className:'revolutions'},
{id: '153', content: '<a href="https://en.wikipedia.org/wiki/Navigation_Acts"  target="iframe_a">Colonial Trading with England</a>', start: '1651',className:'political'},
{id: '154', content: '<a href="https://en.wikipedia.org/wiki/French_and_Indian_War"  target="iframe_a">The French and Indian War</a>', start: '1754',className:'war'},
{id: '155', content: '<a href="https://en.wikipedia.org/wiki/Seven_Years%27_War"  target="iframe_a">End of the Seven Years War</a>', start: '1763',className:'war'},
{id: '156', content: '<a href="http://www.sparknotes.com/history/american/prerevolution/section1.rhtml"  target="iframe_a">British Troops Sent to North America</a>', start: '1763',className:'political'},
{id: '157', content: '<a href="https://en.wikipedia.org/wiki/Second_voyage_of_James_Cook"  target="iframe_a">Captain Cook Explores Oceania and Antarctica</a>', start: '1772',className:'exploration'},
{id: '158', content: '<a href="https://en.wikipedia.org/wiki/No_taxation_without_representation"  target="iframe_a">No Taxation Without Representation</a>', start: '1750',className:'political'},
{id: '159', content: '<a href="http://www.ushistory.org/declaration/related/congress.htm"  target="iframe_a">The First Continental Congress Seeks Peace with Britain</a>', start: '1774-9-5',className:'councils'},
{id: '160', content: '<a href="http://www.bostonteapartyship.com/the-shot-heard-round-the-world"  target="iframe_a">The Shot Heard ‘round The World</a>', start: '1775-4-19',className:'war'},
{id: '161', content: '<a href="https://history.state.gov/milestones/1776-1783/declaration"  target="iframe_a">America Declares Her Independence</a>', start: '1776-7-4',className:'political'},
{id: '162', content: '<a href="http://www.loc.gov/rr/program/bib/ourdocs/commission.html"  target="iframe_a">Washington Commands the Continental Army</a>', start: '1775-7-3',className:'war'},
{id: '163', content: '<a href="https://en.wikipedia.org/wiki/Valley_Forge#Winter_quarters"  target="iframe_a">Winter at Valley Forge</a>', start: '1777-12-19',className:'war'},
{id: '164', content: '<a href="http://www.americaslibrary.gov/jb/revolut/jb_revolut_yorktown_1.html"  target="iframe_a">British Surrender at Yorktown</a>', start: '1781-10-19',className:'political'},
{id: '165', content: '<a href="http://www.loc.gov/rr/program/bib/ourdocs/paris.html"  target="iframe_a">Treaty of Paris </a>', start: '1783-9-3',className:'political'},
{id: '166', content: '<a href="https://en.wikipedia.org/wiki/Constitutional_Convention_(United_States)"  target="iframe_a">The Constitutional Convention </a>', start: '1787-5-25',className:'political'},
{id: '167', content: '<a href="http://www.biography.com/people/wolfgang-mozart-9417115"  target="iframe_a">Mozart</a>', start: '1756-1-27',className:'art_music'},
{id: '168', content: '<a href="http://www.biography.com/people/ludwig-van-beethoven-9204862"  target="iframe_a">Beethoven</a>', start: '1770-12-17',className:'art_music'},
{id: '169', content: '<a href="https://en.wikipedia.org/wiki/French_Revolution"  target="iframe_a">The French Revolution</a>', start: '1789',className:'political'},
{id: '170', content: '<a href="https://en.wikipedia.org/wiki/George_Washington#Presidency_(1789%E2%80%931797)"  target="iframe_a">Washington, America’s First President</a>', start: '1789-4-30',className:'rulers'},
{id: '171', content: '<a href="http://www.monticello.org/site/jefferson/louisiana-purchase"  target="iframe_a">The Louisiana Purchase</a>', start: '1803',className:'political'},
{id: '172', content: '<a href="https://ksh.roma.it/romanticism/1804"  target="iframe_a">Napoleon Crowns Himself Emperor</a>', start: '1804-12-2',className:'rulers'},
{id: '173', content: '<a href="https://en.wikipedia.org/wiki/Timeline_of_the_Lewis_and_Clark_Expedition"  target="iframe_a">The Lewis and Clark Expedition </a>', start: '1804-5-14',className:'exploration'},
{id: '174', content: '<a href="https://en.wikipedia.org/wiki/Second_Great_Awakening"  target="iframe_a">The Second Great Awakening </a>', start: '1790',className:'political'},
{id: '175', content: '<a href="https://en.wikipedia.org/wiki/William_Wilberforce"  target="iframe_a">Wilberforce - A Force Against Slavery </a>', start: '1833-7-26',className:'slavery'},
{id: '176', content: '<a href="https://en.wikipedia.org/wiki/War_of_1812"  target="iframe_a">The War of 1812</a>', start: '1812-6-18',className:'war'},
{id: '177', content: '<a href="https://en.wikipedia.org/wiki/Battle_of_Waterloo"  target="iframe_a">Napoleon’s Last Battle at Waterloo </a>', start: '1815-6-18',className:'war'},
{id: '178', content: '<a href="http://www.history.com/this-day-in-history/congress-passes-the-missouri-compromise"  target="iframe_a">Henry Clay and The Missouri Compromise </a>', start: '1820-3-3',className:'slavery'},
{id: '179', content: '<a href="https://en.wikipedia.org/wiki/Monroe_Doctrine"  target="iframe_a">The Monroe Doctrine </a>', start: '1823-12-2',className:'church'},
{id: '180', content: '<a href="http://www.history.com/this-day-in-history/erie-canal-opens"  target="iframe_a">Erie Canal</a>', start: '1825-10-26',className:'roads_trails'},
{id: '181', content: '<a href="https://en.wikipedia.org/wiki/Industrial_Revolution"  target="iframe_a">The Industrial Revolution </a>', start: '1760',className:'inventions'},
{id: '182', content: '<a href="https://en.wikipedia.org/wiki/Cotton_gin"  target="iframe_a">Cotton Gin </a>', start: '1794-3-14',className:'inventions'},
{id: '183', content: '<a href="https://en.wikipedia.org/wiki/Slavery_in_the_United_States"  target="iframe_a">Slavery in the South</a>', start: '1619',className:'slavery'},
{id: '184', content: '<a href="https://en.wikipedia.org/wiki/Trail_of_Tears"  target="iframe_a">The Cherokee “Trail of Tears” To Oklahoma</a>', start: '1840',className:'roads_trails'},
{id: '185', content: '<a href="http://www.history.com/topics/mexican-american-war"  target="iframe_a">Remember the Alamo and War with Mexico</a>', start: '1846',className:'war'},
{id: '186', content: '<a href="http://www.legendsofamerica.com/we-timeline.html"  target="iframe_a">Settling the West</a>', start: '1834',className:'the_west'},
{id: '187', content: '<a href="https://en.wikipedia.org/wiki/California_Gold_Rush"  target="iframe_a">‘49ers and the California Gold Rush</a>', start: '1848-1-24',className:'the_west'},
{id: '188', content: '<a href="https://en.wikipedia.org/wiki/Oregon_Territory"  target="iframe_a">Opening the Oregon Territory</a>', start: '1848-8-14',className:'the_west'},
{id: '189', content: '<a href="https://en.wikipedia.org/wiki/Abraham_Lincoln"  target="iframe_a">Lincoln</a>', start: '1861-3-4',className:'rulers'},
{id: '190', content: '<a href="https://en.wikipedia.org/wiki/American_Civil_War"  target="iframe_a">The War Between the States </a>', start: '1861-4-12',className:'war'},
{id: '191', content: '<a href="https://en.wikipedia.org/wiki/Battle_of_Gettysburg"  target="iframe_a">The Battle of Gettysburg</a>', start: '1863-7-1',className:'war'},
{id: '192', content: '<a href="https://en.wikipedia.org/wiki/Thirteenth_Amendment_to_the_United_States_Constitution"  target="iframe_a">13th Amendment Abolishes Slavery</a>', start: '1864-4-8',className:'slavery'},
{id: '193', content: '<a href="http://learning.blogs.nytimes.com/2012/05/10/may-10-1869-first-transcontinental-railroad-completed/"  target="iframe_a">Completion of the Transcontinental Railroad </a>', start: '1869-5-10',className:'roads_trails'},
{id: '194', content: '<a href="https://en.wikipedia.org/wiki/Reconstruction_era"  target="iframe_a">Reconstructing the South </a>', start: '1865',className:'war'},
{id: '195', content: '<a href="http://www.leadershipeducators.org/resources/documents/conferences/fortworth/watson.pdf"  target="iframe_a">Black Leadership Emerges in the South</a>', start: '1900',className:'war'},
{id: '196', content: '<a href="https://en.wikipedia.org/wiki/Queen_Victoria"  target="iframe_a">Queen Victoria</a>', start: '1876-5-1',className:'rulers'},
{id: '197', content: '<a href="https://en.wikipedia.org/wiki/Gilded_Age"  target="iframe_a">The Gilded Age in America</a>', start: '1870',className:'political'},
{id: '198', content: '<a href="https://en.wikipedia.org/wiki/Boxer_Rebellion"  target="iframe_a">The Boxer Rebellion in China </a>', start: '1899-8',className:'political'},
{id: '199', content: '<a href="https://en.wikipedia.org/wiki/American_Indian_Wars"  target="iframe_a">The Plains Wars</a>', start: '1622',className:'political'},
{id: '200', content: '<a href="https://en.wikipedia.org/wiki/Battle_of_the_Little_Bighorn"  target="iframe_a">The Battle of Little Big Horn</a>', start: '1876-6-25',className:'political'},
{id: '201', content: '<a href="https://en.wikipedia.org/wiki/Oregon_Trail"  target="iframe_a">Oregon Trail</a>', start: '1843',className:'the_west'},
{id: '202', content: '<a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh"  target="iframe_a">Van Gogh Paints</a>', start: '1885',className:'art_music'},
{id: '203', content: '<a href="https://en.wikipedia.org/wiki/Spanish%E2%80%93American_War"  target="iframe_a">The Spanish-American War </a>', start: '1898-4-28',className:'political'},
{id: '204', content: '<a href="http://ocp.hul.harvard.edu/immigration/timeline.html"  target="iframe_a">Immigration to America</a>', start: '1821',className:'political'},
{id: '205', content: '<a href="https://en.wikipedia.org/wiki/Wright_brothers"  target="iframe_a">Wright Brothers </a>', start: '1903-12-17',className:'scientific_discovery'},
{id: '206', content: '<a href="https://en.wikipedia.org/wiki/World_War_I"  target="iframe_a">World War I</a>', start: '1914',className:'political'},
{id: '207', content: '<a href="https://en.wikipedia.org/wiki/Russian_Revolution"  target="iframe_a">Bolshevik Revolution</a>', start: '1917-3-8',className:'political'},
{id: '208', content: '<a href="https://en.wikipedia.org/wiki/Roaring_Twenties"  target="iframe_a">The Roaring Twenties </a>', start: '1920',className:'political'},
{id: '209', content: '<a href="https://en.wikipedia.org/wiki/Great_Depression"  target="iframe_a">The Great Depression </a>', start: '1929',className:'political'},
{id: '210', content: '<a href="https://en.wikipedia.org/wiki/The_Holocaust"  target="iframe_a">The Holocaust</a>', start: '1933-1-30',className:'political'},
{id: '211', content: '<a href="https://en.wikipedia.org/wiki/World_War_II"  target="iframe_a">World War II</a>', start: '1939',className:'war'},
{id: '212', content: '<a href="https://en.wikipedia.org/wiki/United_Nations"  target="iframe_a">The United Nations </a>', start: '1945-10-24',className:'political'},
{id: '213', content: '<a href="https://en.wikipedia.org/wiki/Communist-controlled_China_(1927%E2%80%931949)"  target="iframe_a">Communist China</a>', start: '1927',className:'political'},
{id: '214', content: '<a href="https://en.wikipedia.org/wiki/Cold_War"  target="iframe_a">The Cold War</a>', start: '1947',className:'political'},
{id: '215', content: '<a href="https://en.wikipedia.org/wiki/Korean_War"  target="iframe_a">Korean War</a>', start: '1950-6-25',className:'war'},
{id: '216', content: '<a href="https://en.wikipedia.org/wiki/Vietnam_War"  target="iframe_a">Vietnam War</a>', start: '1955-11-1',className:'war'},
{id: '217', content: '<a href="https://en.wikipedia.org/wiki/Civil_rights_movement"  target="iframe_a">Civil Rights Movement </a>', start: '1955',className:'political'},
{id: '218', content: '<a href="https://en.wikipedia.org/wiki/Cuban_Missile_Crisis"  target="iframe_a">Cuban Missile Crisis </a>', start: '1962-10-14',className:'war'},
{id: '219', content: '<a href="https://en.wikipedia.org/wiki/Space_Race"  target="iframe_a">The Space Race </a>', start: '1955',className:'political'},
{id: '220', content: '<a href="https://en.wikipedia.org/wiki/Assassination_of_John_F._Kennedy"  target="iframe_a">Assassination of JFK</a>', start: '1963-11-22',className:'birth_death'},
{id: '221', content: '<a href="https://en.wikipedia.org/wiki/Berlin_Wall"  target="iframe_a">Berlin Wall “Falls” </a>', start: '1989-11-9',className:'political'},
{id: '222', content: '<a href="http://2001-2009.state.gov/r/pa/ho/time/pcw/98678.htm"  target="iframe_a">End of Apartheid </a>', start: '1994-4-1',className:'political'},
{id: '223', content: '<a href="https://en.wikipedia.org/wiki/Gulf_War"  target="iframe_a">First Gulf War </a>', start: '1990-8-2',className:'war'},
{id: '224', content: '<a href="https://en.wikipedia.org/wiki/September_11_attacks"  target="iframe_a">World Trade Center Attacked</a>', start: '2001-9-11',className:'political'},
{id: '225', content: '<a href="https://en.wikipedia.org/wiki/COVID-19_pandemic"  target="iframe_a">COVID-19 pandemic</a>', start: '2020-3-11',className:'political'}
]);
 // Configuration for the Timeline
 var options = {
	start:"-000090",
	end:"0115"
};
 // Create a Timeline
 var timeline = new vis.Timeline(container, items, options);

 $( "#churchFilter" ).click(function() {
if( $("#churchFilter").prop("checked") ){
   $(".church" ).fadeIn();
} else {
   $(".church" ).fadeOut();
}
 });
 $( "#politicalFilter" ).click(function() {
$( ".political" ).toggle();
 });
 $( "#birth_deathFilter" ).click(function() {
$( ".birth_death" ).toggle();
 });
 $( "#warFilter" ).click(function() {
$( ".war" ).toggle();
 });
