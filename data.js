// ============================================================
//  Python шпаргалка — ДАННЫЕ
//  Этот файл можно править прямо на GitHub (карандаш → Commit).
//  Страница сама подхватит изменения после обновления Pages (~1 мин).
//
//  Формат сниппета:
//  {
//    id: "уникальная строка",          // любая, но не повторяться
//    section: "название раздела",      // из списка sections ниже (или новый)
//    title: "Коротко, что делает",
//    code: "print('Привет')\nprint(2)", // \n — перевод строки, \" — кавычка внутри
//    note: "Пояснение / что выводит",   // можно ""
//    tags: ["print", "input"],         // для поиска и фильтра, можно []
//    pinned: false                      // true — попадёт в «Закреплённые»
//  }
//  Порядок внутри раздела = порядок в этом файле.
// ============================================================

window.PY_DATA = {

  // Порядок разделов на странице
  sections: [
    "2.2 print и input",
    "2.3 sep, end, присваивание",
    "2.4–2.5 Целые числа: //, %, цифры",
    "4.1–4.3 Условия: if, elif, else",
    "4.2 Логика: and, or, not, in",
    "6.1 int, float, округление",
    "6.2 Строки: срезы и методы",
    "f-строки",
    "6.3 Модуль math",
    "7.1–7.2 Цикл for и range()",
    "7.3 Сценарии: счётчик, сумма, максимум",
    "7.5 Цикл while",
    "7.6 Цифры числа в цикле",
    "7.7 break, continue, else",
    "Списки: append, split, sum"
  ],

  snippets: [

    // ---------- 2.2 print и input ----------
    { id: "s101", section: "2.2 print и input", title: "Вывести текст",
      code: "print('Текст')",
      note: "", tags: ["print"], pinned: false },

    { id: "s102", section: "2.2 print и input", title: "Несколько аргументов через запятую",
      code: "print('Привет,', name, '!')",
      note: "Аргументы разделяются пробелом по умолчанию.", tags: ["print"], pinned: false },

    { id: "s103", section: "2.2 print и input", title: "Считать строку в переменную",
      code: "name = input()",
      note: "input() всегда возвращает строку (str).", tags: ["input"], pinned: false },

    { id: "n101", section: "2.2 print и input", title: "input() с подсказкой",
      code: "name = input('Как вас зовут? ')",
      note: "Пробел после вопроса — чтобы ответ не прилипал к тексту: «зовут? Анна».", tags: ["input"], pinned: false },

    { id: "n102", section: "2.2 print и input", title: "Имена переменных: lower_case_with_underscores",
      code: "user_age = 20      # ✅ латиница, цифры, _\n# 2fast = 1        # ❌ не с цифры\n# my age = 1       # ❌ без пробелов\n# for = 1          # ❌ ключевое слово",
      note: "Имя должно отражать назначение. Ключевые слова (if, for, in, class…) занимать нельзя.", tags: ["переменные", "PEP 8"], pinned: false },

    // ---------- 2.3 sep, end, присваивание ----------
    { id: "s201", section: "2.3 sep, end, присваивание", title: "Свой разделитель: sep",
      code: "print(a, b, c, sep=',')",
      note: "", tags: ["print", "sep"], pinned: false },

    { id: "s202", section: "2.3 sep, end, присваивание", title: "Без перевода строки: end",
      code: "print('Текст', end='')",
      note: "end='' — следующий print продолжит ту же строку; end=' ' — через пробел.", tags: ["print", "end"], pinned: false },

    { id: "s203", section: "2.3 sep, end, присваивание", title: "sep и end вместе",
      code: "print(a, b, sep=' - ', end='!\\n')",
      note: "", tags: ["print", "sep", "end"], pinned: false },

    { id: "n201", section: "2.3 sep, end, присваивание", title: "Вывести числа в одну строку (end в цикле)",
      code: "for i in range(5):\n    print(i, end=' ')\nprint()   # перевод строки в конце",
      note: "Вывод: 0 1 2 3 4", tags: ["print", "end", "for"], pinned: false },

    { id: "s204", section: "2.3 sep, end, присваивание", title: "Множественное присваивание",
      code: "a, b, c = 1, 2, 3",
      note: "Слева и справа должно быть одинаковое число элементов.", tags: ["присваивание"], pinned: false },

    { id: "n202", section: "2.3 sep, end, присваивание", title: "Обмен значений двух переменных",
      code: "x, y = y, x",
      note: "Python сначала вычисляет всю правую часть, потом присваивает. Наивный x = y; y = x — не работает.", tags: ["присваивание", "трюк"], pinned: false },

    { id: "s205", section: "2.3 sep, end, присваивание", title: "Комментарии",
      code: "# Далее будет напечатан текст\nprint('Comments in Python')  # Печать текста с помощью команды print.",
      note: "", tags: ["PEP 8"], pinned: false },

    // ---------- 2.4–2.5 Целые числа ----------
    { id: "s301", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Считать одно целое число",
      code: "num = int(input())",
      note: "", tags: ["input", "int"], pinned: true },

    { id: "s302", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Считать два целых числа",
      code: "a = int(input())\nb = int(input())",
      note: "Или в одну строку: a, b = int(input()), int(input())", tags: ["input", "int"], pinned: false },

    { id: "s303", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Число → строка",
      code: "s = str(num)",
      note: "", tags: ["str", "преобразование"], pinned: false },

    { id: "s304", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Четыре операции",
      code: "print(a + b, a - b, a * b, a / b)",
      note: "Сначала * и /, потом + и −. Порядок меняется скобками. Деление / всегда даёт float.", tags: ["арифметика"], pinned: false },

    { id: "n301", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Приоритет операций",
      code: "print(2 + 3 * 2 ** 2)   # 14\nprint((2 + 3) * 2 ** 2) # 20",
      note: "От высшего к низшему: ( ) → ** → унарный минус → * / // % → + −", tags: ["арифметика"], pinned: false },

    { id: "s501", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Целочисленное деление",
      code: "print(10 // 3)  # 3",
      note: "Округляет вниз, в том числе для отрицательных: -10 // 3 → -4.", tags: ["//", "арифметика"], pinned: false },

    { id: "s502", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Деление с округлением вверх",
      code: "print(-(-a // b))",
      note: "Трюк: -(-10 // 3) даёт 4.", tags: ["//", "трюк"], pinned: true },

    { id: "s503", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Последняя цифра / отбросить её",
      code: "last = num % 10\nrest = num // 10",
      note: "Две базовые операции для всей работы с цифрами числа.", tags: ["%", "//", "цифры"], pinned: false },

    { id: "s505", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Десятки и единицы двузначного",
      code: "num = int(input())\nlast_digit = num % 10\nfirst_digit = num // 10\n\nprint('Число десятков =', first_digit)\nprint('Число единиц =', last_digit)",
      note: "", tags: ["цифры"], pinned: false },

    { id: "s504", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Цифры трёхзначного числа",
      code: "num = int(input())\ndigit3 = num % 10\ndigit2 = (num // 10) % 10\ndigit1 = num // 100\n\nprint(digit1, digit2, digit3, sep=',')",
      note: "", tags: ["цифры"], pinned: true },

    { id: "s507", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Цифры через % (второй способ)",
      code: "a = num % 10             # последняя\nb = (num % 100) // 10    # средняя\nc = num // 100           # первая",
      note: "", tags: ["цифры"], pinned: false },

    { id: "umuqypf2dzqvk", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Сумма цифр трёхзначного (вывод через f-строку)",
      code: "num = int(input())\na = num % 10\nb = num // 10 % 10\nc = num // 100\nprint(f\"Сумма цифр = {a + b + c}\")",
      note: "", tags: ["цифры", "f-строки"], pinned: true },

    { id: "s506", section: "2.4–2.5 Целые числа: //, %, цифры", title: "i-я цифра n-значного числа (формула)",
      code: "(num // 10 ** (n - i)) % 10",
      note: "n — число разрядов, i — номер цифры слева (с 1). Первая цифра: num // 10 ** (n - 1).", tags: ["цифры", "формула"], pinned: false },

    { id: "umwglnm8c3hrr", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Вторая цифра числа любой длины",
      code: "n = int(input())\nx = len(str(n))               # количество разрядов\nsecond_digit = n // (10 ** (x - 2)) % 10\nprint(second_digit)",
      note: "len(str(n)) — «длина» числа.", tags: ["цифры", "len"], pinned: false },

    { id: "n302", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Разница между числами без знака: abs()",
      code: "a = int(input())\nb = int(input())\nprint(abs(a - b))   # на сколько a и b отличаются",
      note: "abs(-7) → 7. Импортировать ничего не нужно.", tags: ["abs"], pinned: false },

    { id: "n303", section: "2.4–2.5 Целые числа: //, %, цифры", title: "Большие числа: разделитель разрядов _",
      code: "population = 25_000_000   # то же, что 25000000\nprint(10 ** 80)           # длинная арифметика без переполнения",
      note: "", tags: ["int"], pinned: false },

    // ---------- 4.1–4.3 Условия ----------
    { id: "umur1k4ox8985", section: "4.1–4.3 Условия: if, elif, else", title: "if-else: сравнить строку",
      code: "word = input()\n\nif word == 'Python':\n    print('ДА')\nelse:\n    print('НЕТ')",
      note: "Задача: вывести «ДА», если введённая строка — Python, иначе «НЕТ». Не путать: = присваивание, == сравнение.", tags: ["if", "else"], pinned: false },

    { id: "n401", section: "4.1–4.3 Условия: if, elif, else", title: "Двузначное число из одинаковых цифр",
      code: "num = int(input())\n\nlast_digit = num % 10\nfirst_digit = num // 10\n\nif last_digit == first_digit:\n    print('ДА')\nelse:\n    print('НЕТ')",
      note: "", tags: ["if", "цифры"], pinned: false },

    { id: "umur1s87zwof3", section: "4.1–4.3 Условия: if, elif, else", title: "Счётчик: сколько чётных среди трёх чисел",
      code: "num1, num2, num3 = int(input()), int(input()), int(input())\n\ncounter = 0  # переменная-счётчик\nif num1 % 2 == 0:\n    counter += 1\nif num2 % 2 == 0:\n    counter += 1\nif num3 % 2 == 0:\n    counter += 1\n\nprint(counter)",
      note: "Несколько независимых if — проверяются все. Чётность: num % 2 == 0.", tags: ["if", "счётчик", "%"], pinned: false },

    { id: "n402", section: "4.1–4.3 Условия: if, elif, else", title: "Цепочка сравнений: число в диапазоне",
      code: "num = int(input())\nif 100 <= num <= 999:     # то же, что num >= 100 and num <= 999\n    print('Число трёхзначное')\nelse:\n    print('Число не трёхзначное')",
      note: "", tags: ["if", "сравнение"], pinned: false },

    { id: "n403", section: "4.1–4.3 Условия: if, elif, else", title: "Каскад if-elif-else",
      code: "grade = int(input('Введите отметку: '))\n\nif grade >= 90:\n    print(5)\nelif grade >= 80:\n    print(4)\nelif grade >= 70:\n    print(3)\nelse:\n    print(1)",
      note: "Условия проверяются сверху вниз, выполняется ПЕРВОЕ истинное, остальное пропускается. else необязателен.", tags: ["if", "elif", "else"], pinned: true },

    { id: "umv26xviwfzcw", section: "4.1–4.3 Условия: if, elif, else", title: "Несколько действий в ветке elif",
      code: "elif D > 0:\n    # Сначала считаем оба корня\n    x1 = (-b - sqrt(D)) / (2 * a)\n    x2 = (-b + sqrt(D)) / (2 * a)\n\n    # Выводим строго от меньшего к большему\n    print(min(x1, x2))\n    print(max(x1, x2))",
      note: "Фрагмент решения квадратного уравнения (sqrt — из math). В ветке можно делать вычисления и несколько print — всё с отступом в 4 пробела.", tags: ["elif", "math", "min", "max"], pinned: false },

    { id: "n404", section: "4.1–4.3 Условия: if, elif, else", title: "Сколько совпадающих среди трёх чисел",
      code: "a, b, c = int(input()), int(input()), int(input())\n\nif a == b == c:\n    print(3)\nelif a == b or b == c or a == c:\n    print(2)\nelse:\n    print(0)",
      note: "a == b == c проверяет равенство трёх. А вот a != b != c НЕ проверяет, что все различны!", tags: ["if", "elif", "or"], pinned: false },

    { id: "n405", section: "4.1–4.3 Условия: if, elif, else", title: "Вложенный if (четверть по координатам)",
      code: "x = int(input())\ny = int(input())\n\nif x > 0:\n    if y > 0:\n        print('Первая четверть')\n    else:\n        print('Четвёртая четверть')\nelse:\n    if y > 0:\n        print('Вторая четверть')\n    else:\n        print('Третья четверть')",
      note: "Каждый уровень вложенности — ещё +4 пробела. Для многих вариантов лучше каскад elif.", tags: ["if", "вложенность"], pinned: false },

    { id: "n406", section: "4.1–4.3 Условия: if, elif, else", title: "Частые ошибки в if",
      code: "if num % 10 == 0      # ❌ нет двоеточия\nif num = 10:          # ❌ = вместо ==\nif age => 7:          # ❌ нет такого оператора, нужно >=\nif 7 <= age <= 9:     # ✅",
      note: "Ещё: тело if обязательно с отступом; else на одном уровне с if.", tags: ["if", "ошибки"], pinned: false },

    // ---------- 4.2 Логика ----------
    { id: "umutj380f506t", section: "4.2 Логика: and, or, not, in", title: "Два условия через and",
      code: "age = int(input('Сколько вам лет?: '))\ngrade = int(input('В каком классе вы учитесь?: '))\nif age >= 12 and grade >= 7:\n    print('Доступ разрешен.')\nelse:\n    print('Доступ запрещен.')",
      note: "and — истина, только если ВСЕ условия истинны. or — если хотя бы одно. Приоритет: not → and → or.", tags: ["and", "or"], pinned: false },

    { id: "n501", section: "4.2 Логика: and, or, not, in", title: "Все три цифры различны",
      code: "num = int(input())\nd3 = num % 10\nd2 = num % 100 // 10\nd1 = num // 100\nif d3 != d2 and d3 != d1 and d2 != d1:\n    print('Цифры различны')\nelse:\n    print('Цифры не различны')",
      note: "", tags: ["and", "цифры"], pinned: false },

    { id: "umutk11qdgy8n", section: "4.2 Логика: and, or, not, in", title: "Значение входит в список вариантов: in",
      code: "if my_city in ('Сидней', 'Аделаида', 'Перт'):\n    print('Я живу в Австралии')",
      note: "Вместо my_city == 'Сидней' or my_city == 'Аделаида' or …", tags: ["in"], pinned: false },

    { id: "n502", section: "4.2 Логика: and, or, not, in", title: "Частая ошибка: or без повтора переменной",
      code: "# ❌ всегда True: непустые строки 'Аделаида', 'Перт' считаются истиной\nif my_city == 'Сидней' or 'Аделаида' or 'Перт':\n\n# ✅\nif my_city == 'Сидней' or my_city == 'Аделаида' or my_city == 'Перт':",
      note: "Также: диапазон — это and (x > 1 and x < 100); x > 1 or x < 100 истинно для любого числа.", tags: ["or", "ошибки"], pinned: false },

    { id: "n503", section: "4.2 Логика: and, or, not, in", title: "Подстрока в строке: in / not in",
      code: "print('Py' in 'Python')   # True\n\ns = input()\nif '.' not in s:\n    print('Точки нет')\n\nif len(s) == 1 and s in 'aeiou':\n    print('Гласная')",
      note: "Проверка чувствительна к регистру.", tags: ["in", "not", "строки"], pinned: false },

    { id: "n504", section: "4.2 Логика: and, or, not, in", title: "Truthy / falsy: короткие условия",
      code: "users = ['Анна', 'Иван']\nif users:            # вместо len(users) > 0\n    print('Есть пользователи')\n\nis_active = True\nif is_active:        # вместо is_active == True\n    print('Активен')\nif not is_active:    # вместо is_active == False\n    print('Выключен')",
      note: "Falsy: False, None, 0, 0.0, '', [], (), {}. Всё остальное — truthy.", tags: ["not", "bool", "pythonic"], pinned: false },

    // ---------- 6.1 int, float ----------
    { id: "n601", section: "6.1 int, float, округление", title: "Считать дробное число",
      code: "x = float(input())    # '1.5' → 1.5\nprint(4 / 2)          # 2.0 — деление всегда даёт float",
      note: "Разделитель — точка, не запятая. int('2.5') — ошибка ValueError.", tags: ["float", "input"], pinned: false },

    { id: "n602", section: "6.1 int, float, округление", title: "float → int: отбрасывание дробной части",
      code: "print(int(1.7))     # 1\nprint(int(-1.7))    # -1  (к нулю, не вниз!)",
      note: "Это не математическое округление.", tags: ["int", "float", "преобразование"], pinned: false },

    { id: "n603", section: "6.1 int, float, округление", title: "round(): округление",
      code: "print(round(3.14159, 2))  # 3.14\nprint(round(2.5))         # 2  — к чётному (банковское)\nprint(round(3.5))         # 4",
      note: "round(x) — до целого, round(x, n) — до n знаков.", tags: ["round", "float"], pinned: false },

    { id: "n604", section: "6.1 int, float, округление", title: "max(), min() от нескольких чисел",
      code: "print(max(3, 8, 5))   # 8\nprint(min(3, 8, 5))   # 3",
      note: "Не называйте свои переменные max / min — перекроете встроенные функции.", tags: ["max", "min"], pinned: false },

    // ---------- 6.2 Строки ----------
    { id: "n701", section: "6.2 Строки: срезы и методы", title: "Длина строки, сцепление, повтор",
      code: "s = 'Python'\nprint(len(s))         # 6\nprint('ab' + 'cd')    # 'abcd'\nprint('-' * 20)       # --------------------",
      note: "Пробелы тоже считаются в len. Строку на строку умножать нельзя.", tags: ["len", "строки"], pinned: false },

    { id: "umv6sfuvv294h", section: "6.2 Строки: срезы и методы", title: "Срезы (slices) ✂️",
      code: "text = \"Программирование\"\nprint(text[0:9])   # \"Программи\" (символы с 0 по 8)\nprint(text[4:])    # \"раммирование\" (с 4 индекса до конца)\nprint(text[::-1])  # \"еинавориммаргорП\" (строка задом наперед, шаг -1)",
      note: "Синтаксис: строка[старт:стоп:шаг]. Индексация с 0, символ под индексом стоп не включается.", tags: ["срезы", "строки"], pinned: true },

    { id: "umv6sn7z4tgvw", section: "6.2 Строки: срезы и методы", title: ".upper() и .lower(): регистр",
      code: "word = \"Python\"\nprint(word.upper())  # \"PYTHON\"\nprint(word.lower())  # \"python\"",
      note: "Методы не меняют исходную строку, а возвращают новую.", tags: ["методы строк", "upper", "lower"], pinned: false },

    { id: "umv6zlp0tj6fl", section: "6.2 Строки: срезы и методы", title: ".strip(): убрать пробелы по краям",
      code: "text = \"   PYTHON   \"\nprint(text.lower().strip())  # python",
      note: ".strip() режет пробелы и переносы строк только слева и справа. Внутри — не трогает.", tags: ["методы строк", "strip"], pinned: false },

    { id: "umv6snnwi057l", section: "6.2 Строки: срезы и методы", title: ".replace(что, на_что): заменить",
      code: "phrase = \"Я люблю Java\"\nprint(phrase.replace(\"Java\", \"Python\"))  # \"Я люблю Python\"\nprint(\"a b c\".replace(\" \", \"\"))           # \"abc\" — убрать все пробелы",
      note: "", tags: ["методы строк", "replace"], pinned: false },

    { id: "umv6sopwi5tkd", section: "6.2 Строки: срезы и методы", title: ".split(разделитель): строка → список",
      code: "data = \"яблоко,банан,киви\"\nprint(data.split(\",\"))  # ['яблоко', 'банан', 'киви']\nprint(\"a b  c\".split())   # ['a', 'b', 'c'] — без аргумента режет по пробелам",
      note: "", tags: ["методы строк", "split", "списки"], pinned: false },

    { id: "n702", section: "6.2 Строки: срезы и методы", title: "Цепочка методов",
      code: "phone = \"  +7 (999) 123-45-67   \"\nclean_phone = phone.strip().replace(' ', '')",
      note: "Методы применяются слева направо, результат первого идёт во второй.", tags: ["методы строк", "цепочка"], pinned: false },

    { id: "n703", section: "6.2 Строки: срезы и методы", title: "Порядок: сначала строковые методы, потом .split()",
      code: "text = \" PYTHON , JAVA \"\n\n# ❌ AttributeError: .split() вернул список, у списка нет .replace()\ntags = text.split(\",\").replace(\" \", \"\")\n\n# ✅ сначала чистим строку, потом режем\ntags = text.replace(\" \", \"\").split(\",\")",
      note: "Или: разбить, а потом чистить каждый элемент внутри цикла for.", tags: ["методы строк", "split", "ошибки"], pinned: false },

    { id: "umv6z93z0g33l", section: "6.2 Строки: срезы и методы", title: "Срез + метод внутри f-строки",
      code: "text = 'Привет, мир!'\nprint(f'{text.upper()[8:]}')  # МИР!",
      note: "", tags: ["срезы", "f-строки", "upper"], pinned: false },

    { id: "umv99bswjcrzt", section: "6.2 Строки: срезы и методы", title: "Генератор ссылок (очистить → lower → подставить)",
      code: "site = input(\"Enter the site: \")\nprint(f'www.{site.lower().strip()}.com')",
      note: "", tags: ["методы строк", "f-строки"], pinned: false },

    { id: "umupl1lsgowtr", section: "6.2 Строки: срезы и методы", title: "\\n внутри строки — несколько строк одним print",
      code: "print(\"1) яблоко\\n2) груша\\n3) банан\")",
      note: "Выведет три строки: 1) яблоко / 2) груша / 3) банан.", tags: ["print", "\\n"], pinned: true },

    { id: "n704", section: "6.2 Строки: срезы и методы", title: "Кавычки внутри строки, многострочный текст",
      code: "print(\"Он сказал: 'привет'\")\nprint('''Первая строка\nвторая строка''')",
      note: "Разные типы кавычек позволяют вставлять одни внутрь других.", tags: ["строки", "кавычки"], pinned: false },

    // ---------- f-строки ----------
    { id: "s401", section: "f-строки", title: "Базовая подстановка",
      code: "name = \"Анна\"\nage = 20\nprint(f\"Привет, меня зовут {name}, мне {age} лет.\")",
      note: "Буква f перед кавычкой, внутри {} — любой код.", tags: ["f-строки", "print"], pinned: true },

    { id: "s402", section: "f-строки", title: "Выражение внутри {}",
      code: "print(f\"{x} + {x} = {x + x}\")",
      note: "Вывод при x = 5: 5 + 5 = 10", tags: ["f-строки"], pinned: false },

    { id: "s403", section: "f-строки", title: "Метод строки внутри {}",
      code: "print(f\"{'мир'.upper()}\")",
      note: "Вывод: МИР", tags: ["f-строки", "методы строк"], pinned: false },

    { id: "n801", section: "f-строки", title: "Конфликт кавычек: снаружи одни, внутри другие",
      code: "name = \" Мой Кот \"\n# снаружи двойные \"\", внутри одинарные ''\nprint(f\"#{name.lower().strip().replace(' ', '')}\")  # #мойкот",
      note: "Одинаковые кавычки снаружи и внутри {} → SyntaxError.", tags: ["f-строки", "ошибки"], pinned: false },

    { id: "s404", section: "f-строки", title: "Округлить до 2 знаков",
      code: "print(f\"Pi: {pi:.2f}\")",
      note: "Вывод: Pi: 3.14", tags: ["f-строки", "float"], pinned: false },

    { id: "s405", section: "f-строки", title: "Отладка: имя и значение",
      code: "print(f\"{a=}\")",
      note: "Вывод: a=42", tags: ["f-строки", "отладка"], pinned: false },

    { id: "s406", section: "f-строки", title: "Перенос строки внутри f-строки",
      code: "print(f\"Первая строка\\nВторая строка\")",
      note: "", tags: ["f-строки", "\\n"], pinned: false },

    // ---------- 6.3 math ----------
    { id: "n901", section: "6.3 Модуль math", title: "Три способа импорта",
      code: "import math              # math.sqrt(2) — с префиксом\nfrom math import sqrt    # sqrt(2) — без префикса, только нужное\nfrom math import *       # всё без префикса — НЕ рекомендуется",
      note: "import * засоряет пространство имён: случайно напишешь e = 5 — затрёшь константу.", tags: ["math", "import"], pinned: false },

    { id: "n902", section: "6.3 Модуль math", title: "sqrt, ceil, floor",
      code: "from math import sqrt, ceil, floor\n\nprint(sqrt(16))    # 4.0\nprint(ceil(3.2))   # 4 — вверх («потолок»)\nprint(floor(3.8))  # 3 — вниз («пол»)",
      note: "Корень без math: n ** 0.5", tags: ["math", "sqrt", "округление"], pinned: false },

    { id: "n903", section: "6.3 Модуль math", title: "Константы и другие функции",
      code: "import math\nprint(math.pi)           # 3.14159…\nprint(math.factorial(5)) # 120\nprint(math.pow(2, 10))   # 1024.0\nprint(math.log10(1000))  # 3.0",
      note: "Ещё: sin, cos, tan (радианы), degrees, radians, log(x, b).", tags: ["math"], pinned: false },

    // ---------- 7.1–7.2 for и range ----------
    { id: "n1001", section: "7.1–7.2 Цикл for и range()", title: "Повторить N раз",
      code: "for i in range(5):\n    print('Привет')   # 5 раз",
      note: "i меняется 0,1,2,3,4. Если i не нужен — пишут for _ in range(5).", tags: ["for", "range"], pinned: true },

    { id: "n1002", section: "7.1–7.2 Цикл for и range()", title: "range(stop) / range(start, stop)",
      code: "for i in range(5):        # 0 1 2 3 4\n    print(i)\nfor i in range(1, 6):     # 1 2 3 4 5\n    print(i)",
      note: "Правая граница НЕ включается. Для 1..5 нужен range(1, 6).", tags: ["for", "range"], pinned: false },

    { id: "n1003", section: "7.1–7.2 Цикл for и range()", title: "range с шагом, обратный отсчёт",
      code: "for i in range(1, 10, 2):    # 1 3 5 7 9\n    print(i)\nfor i in range(56, 171, 2):  # чётные от 56 до 170\n    print(i)\nfor i in range(5, 0, -1):    # 5 4 3 2 1\n    print(i, end=' ')\nprint('Взлетаем!')",
      note: "range(7, 3) и range(3, 10, -2) — пустые. Шаг 0 — ValueError. Только целые.", tags: ["for", "range", "шаг"], pinned: false },

    { id: "umvqtu9cwa124", section: "7.1–7.2 Цикл for и range()", title: "Начать range с нечётного числа",
      code: "start = m - (m + 1) % 2\nfor i in range(start, n):\n    print(i)",
      note: "Если m чётное — start = m − 1, если нечётное — start = m. Например m=4 → 3, m=5 → 5.", tags: ["for", "range", "трюк"], pinned: false },

    { id: "n1004", section: "7.1–7.2 Цикл for и range()", title: "Цикл по символам строки",
      code: "for symbol in 'Python':\n    print(symbol)   # P y t h o n — по одному",
      note: "Если строка 'кот, пёс' и нужны слова — сначала .split(), иначе цикл пойдёт по буквам.", tags: ["for", "строки"], pinned: false },

    { id: "n1005", section: "7.1–7.2 Цикл for и range()", title: "Числа с последней цифрой 7",
      code: "for i in range(100, 1000):   # все трёхзначные\n    if i % 10 == 7:\n        print(i)",
      note: "", tags: ["for", "range", "%"], pinned: false },

    // ---------- 7.3 Сценарии ----------
    { id: "n1101", section: "7.3 Сценарии: счётчик, сумма, максимум", title: "Счётчик",
      code: "counter = 0\nfor _ in range(10):\n    num = int(input())\n    if num > 10:\n        counter += 1   # считаем числа, большие 10\nprint(counter)",
      note: "Заводим до цикла со значением 0. counter += 1 — то же, что counter = counter + 1.", tags: ["for", "счётчик"], pinned: true },

    { id: "n1102", section: "7.3 Сценарии: счётчик, сумма, максимум", title: "Сумма и среднее",
      code: "total = 0\nfor i in range(1, 101):\n    total += i          # сумма 1..100 = 5050\nprint(total)\nprint(total / 100)      # среднее = сумма / количество",
      note: "Произведение — так же, но начальное значение 1 (не 0!) и total *= num.", tags: ["for", "сумма"], pinned: false },

    { id: "n1103", section: "7.3 Сценарии: счётчик, сумма, максимум", title: "Максимум / минимум из вводимых чисел",
      code: "largest = int(input())        # первое число считаем наибольшим\nfor _ in range(9):\n    num = int(input())\n    if num > largest:         # для минимума: num < smallest\n        largest = num\nprint(largest)",
      note: "Начальное значение — ПЕРВЫЙ элемент, а не 0 (иначе сломается на отрицательных).", tags: ["for", "максимум", "минимум"], pinned: false },

    { id: "n1104", section: "7.3 Сценарии: счётчик, сумма, максимум", title: "Расширенные операторы присваивания",
      code: "counter += 1    # counter = counter + 1\ntotal -= 5      # total = total - 5\nx *= 2          # x = x * 2\nn //= 10        # n = n // 10",
      note: "Также /=, %=, **=.", tags: ["присваивание"], pinned: false },

    { id: "n1105", section: "7.3 Сценарии: счётчик, сумма, максимум", title: "Флаг: проверка числа на простоту",
      code: "num = int(input())\nis_prime = True\nfor i in range(2, num):\n    if num % i == 0:        # нашёлся делитель\n        is_prime = False\n\nif num == 1:\n    print('Не простое и не составное')\nelif is_prime:\n    print('Число простое')\nelse:\n    print('Число составное')",
      note: "Флаг — булева переменная, через которую одна часть программы узнаёт о событии в другой.", tags: ["for", "флаг", "простое"], pinned: false },

    // ---------- 7.5 while ----------
    { id: "n1201", section: "7.5 Цикл while", title: "while: пока условие истинно",
      code: "i = 0\nwhile i < 5:\n    print(i)\n    i += 1      # обязательно менять переменную, иначе бесконечный цикл",
      note: "Проверка условия — ДО тела, поэтому цикл может не выполниться ни разу.", tags: ["while"], pinned: true },

    { id: "n1202", section: "7.5 Цикл while", title: "Читать до стоп-значения",
      code: "text = input()\ntotal = 0\nwhile text != 'stop':\n    total += int(text)\n    text = input()       # считываем следующее\nprint('Сумма равна', total)",
      note: "Число итераций заранее неизвестно — значит while, а не for.", tags: ["while", "input"], pinned: false },

    { id: "n1203", section: "7.5 Цикл while", title: "for и while: одно и то же",
      code: "for i in range(101):\n    print(i)\n\ni = 0\nwhile i < 101:\n    print(i)\n    i += 1",
      note: "Любой for можно переписать через while, обратное — не всегда. В задачах лимит ~15 с: бесконечный цикл = Time limit exceeded.", tags: ["while", "for"], pinned: false },

    // ---------- 7.6 Цифры числа в цикле ----------
    { id: "n1301", section: "7.6 Цифры числа в цикле", title: "Перебор цифр справа налево: while",
      code: "num = int(input())\nwhile num != 0:                # пока остались цифры\n    last_digit = num % 10      # последняя цифра\n    ...                        # обрабатываем её\n    num = num // 10            # отбрасываем последнюю",
      note: "Когда порядок цифр не важен и номер разряда не нужен.", tags: ["while", "цифры"], pinned: true },

    { id: "n1302", section: "7.6 Цифры числа в цикле", title: "Сумма цифр числа (while)",
      code: "num = int(input())\ntotal = 0\nwhile num != 0:\n    total += num % 10\n    num //= 10\nprint(total)",
      note: "", tags: ["while", "цифры", "сумма"], pinned: false },

    { id: "n1303", section: "7.6 Цифры числа в цикле", title: "Есть ли в числе цифра 7 (флаг)",
      code: "num = 1576\nhas_seven = False\nwhile num != 0:\n    last_digit = num % 10\n    if last_digit == 7:\n        has_seven = True\n    num = num // 10\n\nif has_seven:\n    print('YES')\nelse:\n    print('NO')",
      note: "", tags: ["while", "цифры", "флаг"], pinned: false },

    { id: "n1304", section: "7.6 Цифры числа в цикле", title: "Перебор цифр слева направо: for + формула",
      code: "num = int(input())\nn = len(str(num))                   # количество разрядов\nfor i in range(1, n + 1):           # по разрядам от 1 до n\n    digit = num // 10 ** (n - i) % 10   # i-я цифра слева\n    print(i, '-я цифра равна ', digit, sep='')",
      note: "Для 8619: 1-я цифра равна 8 … 4-я цифра равна 9. Когда важен порядок слева направо или номер разряда.", tags: ["for", "цифры", "формула"], pinned: true },

    { id: "n1305", section: "7.6 Цифры числа в цикле", title: "Цифры через строку: for symbol in str(num)",
      code: "num_str = input()          # число как текст, например '250'\ncount = 0\n\nfor symbol in num_str:\n    x = int(symbol)        # текущий символ → число\n    if x % 2 == 0:\n        count += 1\n        print(count, '-я чётная цифра равна ', x, sep='')\n\nif count == 0:\n    print('Чётных цифр в числе нет')",
      note: "Самый простой способ пройти по цифрам слева направо — не превращать ввод в int вовсе.", tags: ["for", "цифры", "строки", "счётчик"], pinned: false },

    { id: "n1306", section: "7.6 Цифры числа в цикле", title: "Перевернуть число",
      code: "num = int(input())          # 12345\n\n# str(num) → '12345', [::-1] → '54321', int() → 54321\nnum = int(str(num)[::-1])\n\nwhile num > 0:\n    ...                     # дальше обычный цикл по цифрам",
      note: "Теперь while num % 10 выдаёт цифры в исходном порядке слева направо.", tags: ["срезы", "цифры", "трюк"], pinned: false },

    // ---------- 7.7 break / continue / else ----------
    { id: "n1401", section: "7.7 break, continue, else", title: "break: выйти из цикла досрочно",
      code: "num = int(input())\nis_prime = True\nfor i in range(2, num):\n    if num % i == 0:        # нашли делитель\n        is_prime = False\n        break               # дальше проверять нет смысла\nif is_prime:\n    print('Число простое')\nelse:\n    print('Число составное')",
      note: "Прерывает ближайший цикл, не всю программу.", tags: ["break", "for", "флаг"], pinned: true },

    { id: "n1402", section: "7.7 break, continue, else", title: "continue: пропустить итерацию",
      code: "for i in range(1, 101):\n    if i == 7 or i == 17 or i == 29:\n        continue            # пропускаем эти числа\n    print(i)",
      note: "", tags: ["continue", "for"], pinned: false },

    { id: "n1403", section: "7.7 break, continue, else", title: "while True + break",
      code: "while True:\n    text = input()\n    if text == 'stop':\n        break\n    print(text)",
      note: "Удобно, когда причин выхода несколько. Главное — убедиться, что выход когда-нибудь произойдёт.", tags: ["while", "break"], pinned: false },

    { id: "n1404", section: "7.7 break, continue, else", title: "else у цикла: выполнится, если не было break",
      code: "num = int(input())\nn = num\nwhile n != 0:\n    if n % 10 == 7:\n        print(num, 'содержит цифру 7')\n        break\n    n //= 10\nelse:\n    print(num, 'не содержит цифру 7')   # только если break не сработал",
      note: "Ситуация «перебрали всё и ничего не нашли». continue на else не влияет.", tags: ["else", "while", "break"], pinned: false },

    // ---------- Списки ----------
    { id: "n1501", section: "Списки: append, split, sum", title: "Пустой список + append в цикле",
      code: "cart = []               # пустая «тележка»\ncart.append('хлеб')     # добавить в конец\ncart.append('молоко')\nprint(cart)             # ['хлеб', 'молоко']",
      note: "❌ Частая ошибка: запускать цикл по пустому списку, куда собираешься класть результат — он не выполнится ни разу.", tags: ["списки", "append"], pinned: true },

    { id: "n1502", section: "Списки: append, split, sum", title: "Элементы после split — строки: int() в момент сравнения",
      code: "prices = ['150', '200', '50']    # это список СТРОК\n\nclean_prices = []\nfor price in prices:\n    if int(price) > 100:         # '150' > 100 → TypeError, поэтому int()\n        clean_prices.append(price)",
      note: "❌ for int(tag) in tags: — SyntaxError, в заголовке цикла только имя переменной.", tags: ["списки", "for", "int", "ошибки"], pinned: false },

    { id: "umv9kbz13b0ey", section: "Списки: append, split, sum", title: "Разобрать ввод через запятую, отфильтровать, max/min/sum",
      code: "tags = input(\"Введите слова через запятую: \").replace(' ', '').replace('руб', '').split(\",\")\n\nhashtags = []\n\nfor tag in tags:\n    if int(tag) > 100:\n        hashtags.append(int(tag))   # ['150', '200'] → [150, 200]\n\nprint(max(hashtags))\nprint(min(hashtags))\nprint(sum(hashtags))",
      note: "Ввод: 150 руб , 200руб,  50 руб → вывод 200 / 150 / 350. Сначала чистим строку, потом split.", tags: ["списки", "split", "max", "min", "sum"], pinned: false },

    { id: "n1503", section: "Списки: append, split, sum", title: "sum, min, max, len от списка",
      code: "nums = [3, 8, 5]\nprint(sum(nums))   # 16\nprint(max(nums))   # 8\nprint(min(nums))   # 3\nprint(len(nums))   # 3",
      note: "", tags: ["списки", "sum", "max", "min", "len"], pinned: false }
  ]
};
