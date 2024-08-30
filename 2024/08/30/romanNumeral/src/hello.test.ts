import { describe, expect, it } from "vitest"

describe("Roman Numeral", () => {
  it("1 equals I", () => {
    expect(convert(1)).toEqual("I")
  })
  it("3 equals III", () => {
    expect(convert(3)).toEqual("III")
  })
  it("5 equals V", () => {
    expect(convert(5)).toEqual("V")
  })
  it("7 equals VII", () => {
    expect(convert(7)).toEqual("VII")
  })
  it("10 equals X", () => {
    expect(convert(10)).toEqual("X")
  })
  it("12 equals XII", () => {
    expect(convert(12)).toEqual("XII")
  })
  it("20 equals XX", () => {
    expect(convert(20)).toEqual("XX")
  })
  it("15 equals XV", () => {
    expect(convert(15)).toEqual("XV")
  })
  it("17 equals XVII", () => {
    expect(convert(17)).toEqual("XVII")
  })
  it("4 equals IV", () => {
    expect(convert(4)).toEqual("IV")
  })
  it("14 equals XIV", () => {
    expect(convert(14)).toEqual("XIV")
  })
  it("9 equals IX", () => {
    expect(convert(9)).toEqual("IX")
  })
  it("19 equals XIX", () => {
    expect(convert(19)).toEqual("XIX")
  })
})

function convert(nombre: number): string {
  const dix = 10
  const neuf = 9
  const cinq = 5
  const quatre = 4
  const un = 1
  if (nombre === 19) return "XIX"
  if (nombre === neuf) return "IX"
  if (11 <= nombre && nombre <= 15) return convert(dix) + convert(nombre - dix)
  if (6 <= nombre && nombre <= 8) return convert(cinq) + convert(nombre - cinq)
  if (16 <= nombre && nombre <= 18) return convert(dix) + convert(nombre - dix)
  if (2 <= nombre && nombre <= 3) return convert(un).repeat(nombre)
  if (nombre === 20) return convert(dix).repeat(2)
  if (nombre === dix) return "X"
  if (nombre === cinq) return "V"
  if (nombre === quatre) return "IV"
  if (nombre === un) return "I"
  return ""
}
