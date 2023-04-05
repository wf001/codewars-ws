;; This is solution for Codewars by Clojure
;; See also https://www.codewars.com/users/wf001/completed_solutions

;; https://www.codewars.com/kata/515e271a311df0350d00000f
(defn square-sum
  [lst]
  ;; TODO
  (reduce + (map #(* % %) lst)))


;; https://www.codewars.com/kata/5583090cbe83f4fd8c000051
(defn digitize
  [n]
  (mapv #(Integer/parseInt %) (map str (apply str (reverse (str n))))))


;; https://www.codewars.com/kata/53af2b8861023f1d88000832
(defn plays-banjo?
  [name]
  (if (or (= (first name) \R) (= (first name) \r))
    (str name " plays banjo")
    (str name " does not play banjo")))


;; https://www.codewars.com/kata/55a75e2d0803fea18f00009d
(defn slope
  [v]
  (let [[a b c d] v]
    (if (= a c)
      "undefined"
      (str (/ (- d b) (- c a))))))


;; https://www.codewars.com/kata/5601409514fc93442500010b
(defn better_than_average
  [class_points your_points]
  (let [l (conj class_points your_points)]
    (pos? (- your_points (/ (apply + l) (count l))))))


;; https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
(defn repeat-str
  [n strng]
  (apply str (repeat n strng)))


;; https://www.codewars.com/kata/542ebbdb494db239f8000046
(defn next-item
  "Returns the value that comes after item in xs or nil"
  [xs item]
  (loop [s xs]
    (if (zero? (count s))
      nil
      (if (= (first s) item)
        (->> s next first)
        (recur (next s))))))


;; https://www.codewars.com/kata/55cbc3586671f6aa070000fb

(defn check-for-factor
  [base factor]
  (zero? (mod base factor)))


;; https://www.codewars.com/kata/56dec885c54a926dcd001095
(defn opposite
  [number]
  (* number -1))


;; https://www.codewars.com/kata/5b180e9fedaa564a7000009a
(defn solve
  [s]
  (if (> (count (filter #(java.lang.Character/isUpperCase %) s)) (/ (count s) 2))
    (st/upper-case s)
    (st/lower-case s)))


;; https://www.codewars.com/kata/5270d0d18625160ada0000e4
(defn calc
  [i val]
  (let
    [three {1 1000,2 200,3 300,
            4 400,5 500,6 600}
     one {1 100,5 50}]
    ;; (println i val (get three i))
    (if (= val nil)
      0
      (if (or (= i 1) (= i 5))
        (cond
          (< val 3) (* (get one i) val)
          (> val 2) (+ (get three i) (* (get one i) (- val 3))))
        (* (get three i) (if (pos? (- val 2)) 1 0))))))


(defn score
  [dice]
  (let [fr (frequencies dice)]
    (loop [i 1 ans 0]
      ;; (println i ans)
      (if (> i 6)
        ans
        (recur (inc i) (+ ans (calc i (get fr i))))))))


;; https://www.codewars.com/kata/56530b444e831334c0000020
(defn chromosome-check
  [sperm]
  (let [m "Congratulations! You're going to have a "]
    (if (= sperm "XY")
      (str m "son.")
      (str m "daughter."))))


;; https://www.codewars.com/kata/5467e4d82edf8bbf40000155
(defn desc-order
  [n]
  (Integer/parseInt (apply str (reverse (sort (str n))))))


;; https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
(defn star-sort
  [arr]
  (->> arr
       sort
       first
       (#(clojure.string/join "***" %))))


;; https://www.codewars.com/kata/523b4ff7adca849afe000035
(defn greet
  []
  "hello world!")


;; https://www.codewars.com/kata/523b623152af8a30c6000027
(defn square
  [n]
  (* n n))


;; https://www.codewars.com/kata/52fba66badcd10859f00097e
(defn disemvowel
  [s]
  (apply str (filter #(not (clojure.string/includes? "aiueoAIUEO" (str %))) s)))


;; https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
(defn how-old
  [her-old]
  (java.lang.Integer/parseInt (subs her-old 0 1)))


;; https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
(defn past
  [h m s]
  (let [hsec (* h 3600)
        msec (* m 60)
        ssec s]
    (* (+ hsec msec ssec) 1000)))


;; https://www.codewars.com/kata/5656b6906de340bd1b0000ac
(defn longest
  [s1 s2]
  (->> (str s1 s2)
       distinct
       sort
       (apply str)))


;; https://www.codewars.com/kata/5390bac347d09b7da40006f6
(defn jaden-case
  [s]
  (->> (split s #" ")
       (map #(capitalize %))
       (join " ")))


;; https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
(defn move
  [position roll]
  (+ (* 2 roll) position))


;; https://www.codewars.com/kata/5663f5305102699bad000056
(defn mxdiflg
  [a1 a2]
  (if (or (empty? a1) (empty? a2))
    -1
    (let [a1l (map #(.length %) a1)
          a2l (map #(.length %) a2)
          g1 (apply max a1l)
          l1 (apply min a1l)
          g2 (apply max a2l)
          l2 (apply min a2l)
          cnd1 (Math/abs (- g1 l2))
          cnd2 (Math/abs (- g2 l1))]
      (if (> cnd1 cnd2)
        cnd1
        cnd2))))


;; https://www.codewars.com/kata/56f3a1e899b386da78000732
(defn sp
  [arr i]
  (let [[h t] (split-at i arr)]
    (list (clojure.string/join " " h) (clojure.string/join " " t))))


(defn partlist
  [arr]
  (let [l (count arr)]
    (loop [i 1
           ans []]
      (if (= i l)
        ans
        (recur (inc i)
               (conj ans (sp arr i)))))))


;; https://www.codewars.com/kata/556deca17c58da83c00002db
(defn tribonacci
  ([xs n]
   (let [[a b c] xs]
     (take n (concat xs (tribonacci a b c n)))))
  ([a b c n]
   (let [d (+ a b c)]
     (lazy-seq (cons d (tribonacci b c d n))))))


;; https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
(defn solution
  [n]
  (sort n))


;; https://www.codewars.com/kata/5263c6999e0f40dee200059d

(defn cart
  [colls]
  (if (empty? colls)
    '(())
    (for [more (cart (rest colls))
          x (first colls)]
      (cons x more))))


(defn get-pins
  [observed]
  (let [m {\1 ["1" "2" "4"]
           \2 ["2" "1" "3" "5"]
           \3 ["3" "2" "6"]
           \4 ["4" "1" "5" "7"]
           \5 ["5" "2" "4" "6" "8"]
           \6 ["6" "3" "5" "9"]
           \7 ["7" "4" "8"]
           \8 ["8" "5" "7" "9" "0"]
           \9 ["9" "6" "8"]
           \0 ["0" "8"]}
        colls (map #(m %) observed)]
    (map #(apply str %) (cart colls))))


;; https://www.codewars.com/kata/56541980fa08ab47a0000040
(defn printer-error
  [s]
  (str
    (count
      (filter #(> (int %) (int \m)) s)) "/" (count s)))


;; https://www.codewars.com/kata/5552101f47fc5178b1000050
(defn g
  [n p]
  (reduce + (map #(Math/pow (- (long %1) 48) %2) (str n) (range p (+ p (count (str n)))))))


(defn dig-pow
  [n p]
  (let [res (long (g n p))]
    (if (zero? (mod res n))
      (quot res n)
      -1)))


;; https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
(defn subsets
  [n items]
  (cond
    (= n 0) '(())
    (empty? items) '()
    :else (concat (map
                    #(cons (first items) %)
                    (subsets (dec n) (rest items)))
                  (subsets n (rest items)))))


(defn som
  [l]
  (reduce + l))


(defn choose-best-sum
  [t k ls]
  (let [a (subsets k ls) mx -1 res []
        b (map som a)
        c (filter (fn [x] (<= x t)) b)
        d (if (empty? c)
            nil
            (apply max c))]
    d))


;; https://www.codewars.com/kata/57eaec5608fed543d6000021
(defn div-con
  [x]
  (-
    (apply + (filter #(not (string? %)) x))
    (apply + (map #(Integer/parseInt %) (filter string? x)))))


;; https://www.codewars.com/kata/57f759bb664021a30300007d
(defn switcheroo
  [s]
  (clojure.string/replace
    (clojure.string/replace
      (clojure.string/replace s
                              #"a"
                              "z")
      #"b"
      "a")
    #"z"
    "b"))


;; https://www.codewars.com/kata/59727ff285281a44e3000011
(defn generate-band-name
  [noun]
  (let [n (clojure.string/capitalize noun)]
    (prn n noun)
    (if (= (first noun) (last noun))
      (str n (clojure.string/join "" (rest n)))
      (str "The " n))))


;; https://www.codewars.com/kata/550498447451fbbd7600041c
(defn compSame
  [a b]
  (if (or (not (= (count a) (count b)))
          (nil? a)
          (nil? b))
    false
    (let [asq (map #(* % %) a)]
      (= (sort b) (sort asq)))))


;; https://www.codewars.com/kata/555eded1ad94b00403000071
(defn series-sum
  [n]
  (if (zero? n)
    "0.00"
    (format "%.2f"
            (apply +
                   (map #(/ 1.0 %)
                        (take n (iterate (partial + 3) 1)))))))


;; https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
(defn solution
  [strng ending]
  (let [i (- (count strng) (count ending))]
    (= ending (clojure.string/join "" (drop i strng)))))


;; https://www.codewars.com/kata/520b9d2ad5c005041100000f
(defn f
  [s]
  (let [h (subs s 0 1)
        t (subs s 1)]
    (if (or (= h "!")
            (= h "?"))
      (str t h)
      (str t h "ay"))))


(defn pig-it
  [s]
  (->> (clojure.string/split s #" ")
       (map #(f %))
       (clojure.string/join " ")))


;; https://www.codewars.com/kata/56a5d994ac971f1ac500003e
(defn max?
  [a b]
  (if (> (count a) (count b))
    a
    b))


(defn longest-cons
  [strarr k]
  (->>
    (map #(clojure.string/join "" (take k (drop % strarr)))
         (range 0 (inc (- (count strarr) k))))
    reverse
    (reduce max? "")))


;; https://www.codewars.com/kata/54e6533c92449cc251001667
(defn unique-in-order
  [input]
  (loop [prev nil cur input ans []]
    (if (empty? cur)
      ans
      (if (= (first cur) prev)
        (recur (first cur) (rest cur) ans)
        (recur (first cur) (rest cur) (conj ans (first cur)))))))


;; https://www.codewars.com/kata/5601c5f6ba804403c7000004

(defn bar-triang
  [[a b] [c d] [e f]]
  (->> (conj [] (/ (+ a c e) 3.0) (/ (+ b d f) 3.0))
       (map #(Double/parseDouble (format "%.4f" %)))))


;; https://www.codewars.com/kata/566fc12495810954b1000030
(defn nb-dig
  [n d]
  (get
    (frequencies
      (clojure.string/join ""
                           (map #(str (* % %)) (range (inc n)))))
    (Character/forDigit d 10)))


;; https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
(defn xor
  [a,b]
  (not= a b))


;; https://www.codewars.com/kata/57a6633153ba33189e000074

(defn ordered-count
  [string]
  (let [fre (frequencies string)]
    (loop [ss string ord []]
      (if (empty? ss)
        (map #(seq [% (fre %)]) ord)
        (recur (rest ss)
               (if (some #(= (first ss) %) ord)
                 ord
                 (conj ord (first ss))))))))


;; https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
(defn wave
  [s]
  (->> (map #(if (= (subs s % (inc %)) " ")
               nil
               (str (subs s 0 %)
                    (clojure.string/capitalize (subs s %))))
            (range (count s)))
       (filter #(not (empty? %)))))


;; https://www.codewars.com/kata/55ec80d40d5de30631000025
(defn get-max-exp
  [i x]
  (last (take-while #(not (pos? (- (Math/pow i %) x))) (lazy-seq (range)))))


(defn decompose
  [n]
  (loop [i 2 r n ks []]
    (prn i r ks)
    (cond
      (zero? r) (conj [] ks 0)
      (< r (Math/pow i 2)) (conj [] ks r)
      :else
      (let [k (get-max-exp i r)]
        (recur (inc i) (- r (long (Math/pow i k))) (conj ks k))))))


;; https://www.codewars.com/kata/5545f109004975ea66000086
(defn is-divisible
  [n x y]
  (and (zero? (mod n x)) (zero? (mod n y))))


;; https://www.codewars.com/kata/555624b601231dc7a400017a
(defn josephus-survivor
  [n k]
  (loop [f 1 i 2]
    (if (> i n)
      f
      (recur (+ (mod (+ (- k 1) f) i) 1) (inc i)))))


;; https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
(defn solve
  [s idx]
  (->> (filter #(> (count s) %) idx)
       (reduce #(str (subs %1 0 %2)
                     (clojure.string/capitalize (subs %1 %2 (inc %2)))
                     (subs %1 (inc %2))) s)))


;; https://www.codewars.com/kata/5a905c2157c562994900009d
(defn product-array
  [l]
  (let [v (into [] l)]
    (->>
      (map #(concat (subvec v 0 %) (subvec v (inc %))) (range (count v)))
      (map #(reduce * 1 %)))))


;; https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
(defn find-key
  [c]
  (cond
    (and (< 47 c) (< c 58)) :n
    (and (< 64 c) (< c 91)) :u
    (and (< 96 c) (< c 123)) :l
    :else :s))


(defn solve
  [s]
  (let [c {:u 0 :l 0 :n 0 :s 0}]
    (->> (reduce #(update %1 (find-key (int %2)) inc) c s)
         (map val))))


;; https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
(defn solve
  [numbers]
  (->> (frequencies numbers)
       (sort-by key)
       reverse
       (sort-by val)
       reverse
       (reduce #(concat %1 (repeat (%2 1) (%2 0))) [])))


;; https://www.codewars.com/kata/592fd8f752ee71ac7e00008a
(defn covfefe
  [tweet]
  (if (clojure.string/includes? tweet "coverage")
    (clojure.string/replace tweet #"coverage" "covfefe")
    (str tweet " covfefe")))


;; https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
(defn row-sum-odd-numbers
  [input]
  (let [k (+ 3 (* (- (dec input) 1) (+ (dec input) 2)))]
    (/ (* input (+ (* 2 k) (* (- input 1) 2))) 2)))


;; https://www.codewars.com/kata/5adadcb36edb07df5600092e
(defn seven-wonders-science
  [c g t]
  (+ (* 7 (reduce min [c g t])) (reduce + (map #(* % %) [c g t]))))


;; https://www.codewars.com/kata/5648b12ce68d9daa6b000099
(defn number
  [bus-stops]
  (reduce #(+ %1 (- (%2 0) (%2 1))) 0 bus-stops))


;; https://www.codewars.com/kata/55f2b110f61eb01779000053
(defn get-sum
  [a b]
  (apply + (range (min a b) (inc (max a b)))))


;; https://www.codewars.com/kata/5a97387e5ee396e70a00016d
(defn pofi
  [n]
  (case (mod n 4)
    0 "1"
    1 "i"
    2 "-1"
    3 "-i"))


;; https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
(defn find_shortest
  [words]
  (reduce min (map #(count %) (clojure.string/split words #" "))))


;; https://www.codewars.com/kata/554e4a2f232cdd87d9000038
(defn dna-strand
  [dna]
  (let [m {\A \T \T \A \G \C \C \G}]
    (clojure.string/join "" (map #(m %) dna))))


;; https://www.codewars.com/kata/5265326f5fda8eb1160004c8
(defn number-to-string
  [num]
  (str num))


;; https://www.codewars.com/kata/554b4ac871d6813a03000035
(defn high-and-low
  [s]
  (let [l (map read-string (clojure.string/split s #" "))
        ma (reduce max l)
        mi (reduce min l)]
    (str ma " " mi)))


;; https://www.codewars.com/kata/560a4962c0cc5c2a16000068
(defn f
  [l po]
  (map #(long (Math/pow % po)) l))


(defn eq-sum-pow-dig
  [hmax po]
  (->> (map #(for [n (str %)] (- (byte n) 48)) (range 2 (inc hmax)))
       (map #(f % po))
       (map #(apply + %))
       (map #(when (= %1 %2) %1) (range 2 (inc hmax)))
       (filter identity)))


;; https://www.codewars.com/kata/525e5a1cb735154b320002c8
(defn triangular
  [n]
  (if (< n 0)
    0
    (/ (* n (+ 2 (- n 1))) 2)))


;; https://www.codewars.com/kata/563b662a59afc2b5120000c6
(defn nb-year
  [p0 percent aug p]
  (loop [popu p0 i 0]
    (prn p0 percent aug p i)
    (if (>= popu p)
      i
      (recur (long (+ (+ popu (* popu (/ percent 100))) aug)) (inc i)))))


;; https://www.codewars.com/kata/514b92a657cdc65150000006
(defn solution
  [number]
  (apply + (filter #(or (zero? (mod % 3)) (zero? (mod % 5))) (range 1  number))))


;; https://www.codewars.com/kata/550554fd08b86f84fe000a58
(defn f
  [sub a2]
  (->> (map #(when (clojure.string/includes? % sub) sub) a2)
       (some identity)))


(defn in-array
  [array1 array2]
  (->> (map #(f % array2) array1)
       (filter identity)
       set
       sort))


;; https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

(defn hamming
  [a b]
  (->> (map #(when (not= %1 %2) 1) a b)
       (filter identity)
       count))


;; https://www.codewars.com/kata/51b6249c4612257ac0000005
(defn g
  [m s]
  (reduce #(clojure.string/replace %1 (key %2) (val %2)) s m))


(defn translate-roman-numerals
  [s]
  (let [m1 {#"CM" "a" #"CD" "b" #"XC" "c"
            #"XL" "d" #"IX" "e" #"IV" "f"}
        m2 {#"M" "g" #"D" "h"
            #"C" "i" #"L" "j"
            #"X" "k" #"V" "l" #"I" "m"}
        v {\a 900 \b 400 \c 90 \d 40
           \e 9 \f 4 \g 1000 \h 500
           \i 100 \j 50 \k 10 \l 5 \m 1}]
    (->> (g m1 s)
         (g m2)
         (map v)
         (apply +))))


;; https://www.codewars.com/kata/525f50e3b73515a6db000b83
(defn create-phone-number
  [nums]
  (str "(" (apply str (take 3 nums)) ") "
       (apply str (take 3 (drop 3 nums))) "-"
       (apply str (drop 6 nums))))


;; https://www.codewars.com/kata/541c8630095125aba6000c00

(defn digital-root
  [n]
  (loop [res n]
    (if (< res 10)
      res
      (recur (reduce #(+ %1 (Character/digit %2 10)) 0 (str res))))))


;; https://www.codewars.com/kata/51b62bf6a9c58071c600001b
(defn solution
  [n]
  (let [m {1 "I" 4 "IV" 5 "V" 9 "IX"
           10 "X" 40 "XL" 50 "L" 90 "XC"
           100 "C" 400 "CD" 500 "D" 900 "CM" 1000 "M"}]
    (loop [cur n div 1000 ans ""]
      (if (zero? cur)
        ans
        (let [t (quot cur div)
              ncur (mod cur div)
              ndiv (quot div 10)]
          (prn cur div ans t)
          (cond
            (= t 0) (recur ncur ndiv ans)
            (or (= t 4) (= t 9)) (recur ncur ndiv (str ans (get m (* t div))))
            (< t 4) (recur ncur ndiv (str ans (apply str (repeat t (get m div)))))
            :else (recur ncur ndiv (str ans (apply str (get m (* 5 div)) (repeat (- t 5) (get m div)))))))))))


;; https://www.codewars.com/kata/56445c4755d0e45b8c00010a

(defn fortune
  [fort-init p per-year nb-year infl]
  (let [irate (/ infl 100.0)
        intr (/ p 100.0)]
    (loop [f fort-init c per-year cur 1]
      (prn f c cur)
      (if (or (= cur nb-year) (neg? f))
        (and (= cur nb-year) (not (neg? f)))
        (recur (long (+ f (* f intr) (* -1 c)))
               (long (+ c (* c irate)))
               (inc cur))))))


;; https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
(defn clean-string
  [s]
  (->> (reduce #(if (not= %2 \#)
                  (conj %1 (str %2))
                  (if (not (empty? %1)) (pop %1) %1))
               []
               s)
       (apply str)))


;; https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
(defn persistence
  [n]
  (loop [i n acc 0]
    (prn i)
    (if (< i 10)
      acc
      (recur (reduce * 1 (map #(int (Character/digit % 10)) (str i))) (inc acc)))))


;; https://www.codewars.com/kata/5626b561280a42ecc50000d1
(defn f
  [x]
  (->> (str x)
       (map #(long (Math/pow (Character/digit %2 10) %1)) (iterate inc 1))
       (reduce +)))


(defn sum-dig-pow
  [a b]
  (filter #(= % (f %)) (range a b)))


;; https://www.codewars.com/kata/5544c7a5cb454edb3c000047
(defn bouncing-balls
  [h bounce window]
  (if (or (<= h 0)
          (<= bounce 0)
          (<= 1 bounce)
          (<= h window))
    -1
    (->> (take-while #(> % window) (iterate #(* % bounce) h))
         count
         dec
         (* 2)
         inc)))


;; https://www.codewars.com/kata/5a58ca28e626c55ae000018a
(defn area-of-polygon-inside-circle
  [r n]
  (let [a (/ (* r r) 2)
        b (Math/sin (Math/toRadians (/ 360 n)))]
    (->> (* n a b)
         (format "%.3f")
         (Double/parseDouble))))


;; https://www.codewars.com/kata/545cedaa9943f7fe7b000048
(defn pangram?
  [s]
  (->> (filter #(Character/isAlphabetic (int %)) s)
       (map #(Character/toLowerCase %))
       set
       count
       (= 26)))


;; https://www.codewars.com/kata/54557d61126a00423b000a45
(defn reverseLonger
  [a b]
  (if (>= (count a) (count b))
    (str b (apply str (reverse a)) b)
    (str a (apply str (reverse b)) a)))


;; https://www.codewars.com/kata/56484848ba95170a8000004d

(defn gps
  [s x]
  (if (> 2 (count x))
    0
    (->>
      (map #(quot (* 3600 (- %2 %1)) s) x (rest x))
      (reduce max)
      int)))


;; https://www.codewars.com/kata/52c31f8e6605bcc646000082
(defn twosum
  [numbers target]
  (prn numbers target)
  (loop [h (first numbers)
         t (rest numbers)
         res []
         i 0]
    (prn h t res i)
    (if (> (.indexOf res target) -1)
      (conj [] (dec i) (+ i (.indexOf res target)))
      (recur (first t) (rest t) (map #(+ h %) t) (inc i)))))


;; https://www.codewars.com/kata/54da5a58ea159efa38000836
(defn g
  [xs]
  (get xs 0))


(defn find-odd
  [xs]
  (->> (frequencies xs)
       (filter #(odd? (% 1)))
       first
       first))


;; https://www.codewars.com/kata/5679aa472b8f57fb8c000047
(defn rl-equal?
  [arr i]
  (let [l (take i arr)
        r (drop (inc i) arr)]
    (= (apply + l) (apply + r))))


(defn find-even-index
  [arr]
  (let [lim (count arr)]
    (loop [i 0]
      (cond
        (<= lim i) -1
        (rl-equal? arr i) i
        :else (recur (inc i))))))


;; https://www.codewars.com/kata/55ffb44050558fdb200000a4
(defn sum-dig-nth-term
  [i p n]
  (let [s (reduce + p)
        c (count p)
        n (dec n)
        div (quot n c)
        m (mod n c)]
    (->> (+ i (* s div) (apply + (take m p)))
         str
         (map #(Character/digit % 10))
         (apply +))))


;; https://www.codewars.com/kata/560b8d7106ede725dd0000e2

(defn prime?
  [x]
  (->> (filter #(zero? (mod x %))
               (range 2 (inc (Math/sqrt x))))
       count
       zero?))


(defn f
  [x g]
  (if (prime? x)
    (take-while (comp not prime?) (iterate g (g x)))
    (take-while (comp not prime?) (iterate g x))))


(defn prime-bef-aft
  [n]
  (let [l (f n dec)
        r (f n inc)]
    (prn l r)
    (conj [] (dec (last l)) (inc (last r)))))


;; https://www.codewars.com/kata/5848565e273af816fb000449
(defn f
  [s]
  (let [c (count s)
        hp (re-pattern #"^[a-zA-Z]")
        hm (re-matcher hp (subs s 1))
        hs (re-find hm)
        tp (re-pattern #"[a-zA-Z]$")
        tm (re-matcher tp (subs s 1))
        ts (re-find tm)]
    (str (int (first s))
         (cond
           (= c 1) ""
           (= c 2) (subs s 1 2)
           (= c 3) (str ts hs)
           :else (str ts (subs s 2 (dec c)) hs)))))


(defn encrypt-this
  [text]
  (prn text)
  (clojure.string/join " " (map f (clojure.string/split text #" "))))


;; https://www.codewars.com/kata/55f1614853ddee8bd4000014
(defn div
  [k]
  (->> (filter #(zero? (mod k %)) (range 1 (Math/sqrt k)))
       count
       (* 2)
       (+ (if (zero? (mod k (Math/sqrt k))) 1 0))))


(defn count-pairs-int
  [diff nmax]
  (let [d (map div (range  1  nmax))]
    (->> (map #(= %1 %2) d (drop diff d))
         (filter true?)
         count)))
