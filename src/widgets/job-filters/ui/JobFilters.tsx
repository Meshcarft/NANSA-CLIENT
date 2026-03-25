"use client";

import {
  Award,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  GraduationCap,
  Heart,
  MapPin,
  RefreshCw,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { type KeyboardEvent, useState } from "react";

import { cn } from "@/shared/lib/utils";

const FILTER_GROUPS = [
  {
    id: "role",
    title: "직무·산업",
    icon: Briefcase,
    items: [
      { id: "filter-1", label: "기획/PM/PO", count: 852 },
      { id: "filter-2", label: "백엔드 개발", count: 1240 },
      { id: "filter-3", label: "프론트엔드 개발", count: 981 },
      { id: "filter-4", label: "데이터 엔지니어링", count: 452 },
    ],
  },
  {
    id: "location",
    title: "지역별 (전국)",
    icon: MapPin,
    items: [
      { id: "loc-1", label: "서울", count: 24510 },
      { id: "loc-2", label: "경기", count: 18231 },
      { id: "loc-3", label: "인천", count: 4521 },
      { id: "loc-4", label: "부산", count: 3241 },
      { id: "loc-5", label: "대구", count: 2124 },
      { id: "loc-6", label: "광주", count: 1542 },
      { id: "loc-7", label: "대전", count: 1823 },
      { id: "loc-8", label: "울산", count: 942 },
      { id: "loc-9", label: "세종", count: 421 },
      { id: "loc-10", label: "강원", count: 312 },
      { id: "loc-11", label: "충북", count: 542 },
      { id: "loc-12", label: "충남", count: 1241 },
      { id: "loc-13", label: "전북", count: 421 },
      { id: "loc-14", label: "전남", count: 382 },
      { id: "loc-15", label: "경북", count: 1124 },
      { id: "loc-16", label: "경남", count: 2124 },
      { id: "loc-17", label: "제주", count: 152 },
      { id: "loc-18", label: "해외/원격", count: 1205 },
    ],
  },
  {
    id: "experience",
    title: "경력·연차",
    icon: GraduationCap,
    items: [
      { id: "exp-1", label: "신입/인턴", count: 2314 },
      { id: "exp-2", label: "경력 무관", count: 8521 },
      { id: "exp-3", label: "1~3년", count: 5412 },
      { id: "exp-4", label: "5~7년", count: 2124 },
      { id: "exp-5", label: "10년 이상", count: 842 },
    ],
  },
  {
    id: "academic",
    title: "학력별",
    icon: Award,
    items: [
      { id: "aca-1", label: "학력 무관", count: 12451 },
      { id: "aca-2", label: "대졸(4년제)", count: 8521 },
      { id: "aca-3", label: "전문대졸", count: 3241 },
      { id: "aca-4", label: "고졸 이하", count: 1542 },
    ],
  },
  {
    id: "company",
    title: "기업형태",
    icon: Building2,
    items: [
      { id: "co-1", label: "대기업", count: 421 },
      { id: "co-2", label: "상장기업", count: 852 },
      { id: "co-3", label: "중견/강소기업", count: 2561 },
      { id: "co-4", label: "외국계 기업", count: 624 },
      { id: "co-5", label: "스타트업/벤처", count: 3245 },
    ],
  },
  {
    id: "employment",
    title: "고용형태",
    icon: Users,
    items: [
      { id: "emp-1", label: "정규직", count: 18521 },
      { id: "emp-2", label: "계약직", count: 4214 },
      { id: "emp-3", label: "프리랜서", count: 852 },
      { id: "emp-4", label: "인턴/파견", count: 1245 },
    ],
  },
  {
    id: "salary",
    title: "연봉/급여",
    icon: CircleDollarSign,
    items: [
      { id: "sal-1", label: "3,000만원 이상", count: 8521 },
      { id: "sal-2", label: "5,000만원 이상", count: 4215 },
      { id: "sal-3", label: "8,000만원 이상", count: 1245 },
      { id: "sal-4", label: "회사내규에 따름", count: 22451 },
    ],
  },
  {
    id: "rank",
    title: "직급/직책",
    icon: CreditCard,
    items: [
      { id: "rk-1", label: "사원/주임", count: 15421 },
      { id: "rk-2", label: "대리/과장", count: 3241 },
      { id: "rk-3", label: "팀장/매니저", count: 2145 },
      { id: "rk-4", label: "임원/CEO", count: 421 },
    ],
  },
  {
    id: "benefit",
    title: "복리후생",
    icon: Heart,
    items: [
      { id: "ben-1", label: "재택/유연근무", count: 8521 },
      { id: "ben-2", label: "스톡옵션", count: 4215 },
      { id: "ben-3", label: "식비지원", count: 12451 },
      { id: "ben-4", label: "자기계발비", count: 3245 },
    ],
  },
];

export function JobFilters() {
  const [selected, setSelected] = useState<string[]>(["filter-1", "loc-1"]);
  const [openGroups, setOpenGroups] = useState<string[]>(["role", "location", "experience"]);

  const toggleItem = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => (prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]));
  };

  const handleKeyDown = (e: KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <aside className="h-full space-y-10 animate-fade-in select-none font-sans">
      {/* 🏛 NAVIGATION HEADER */}
      <div className="flex items-center justify-between pb-6 border-b border-border/10">
        <h3 className="text-xl font-black text-foreground tracking-tighter uppercase flex items-center gap-3">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          <span>필터 상세조건</span>
        </h3>
        <button
          type="button"
          onClick={() => setSelected([])}
          className="text-[10px] font-black text-primary hover:text-primary/60 transition-all flex items-center gap-1.5 uppercase tracking-widest"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* 📦 SCALABLE ACCORDION GROUPS */}
      <div className="space-y-8 h-auto pr-2 custom-scrollbar no-scrollbar pb-20">
        {FILTER_GROUPS.map((group) => {
          const isOpen = openGroups.includes(group.id);
          const Icon = group.icon;

          return (
            <div key={group.id} className="space-y-6">
              {/* Category Dropdown Toggle */}
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center justify-between group transition-all pb-3 border-b border-border/5"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={14}
                    className={cn(
                      "transition-colors",
                      isOpen ? "text-primary" : "text-muted-foreground/30",
                    )}
                  />
                  <span
                    className={cn(
                      "text-[14px] font-black tracking-tight uppercase transition-all",
                      isOpen
                        ? "text-foreground"
                        : "text-muted-foreground/60 group-hover:text-foreground",
                    )}
                  >
                    {group.title}
                  </span>
                </div>
                <ChevronDown
                  size={14}
                  className={cn(
                    "text-muted-foreground/20 transition-transform duration-300",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div
                  className={cn(
                    "pl-1 animate-in slide-in-from-top-1 duration-300",
                    group.id === "location" ? "grid grid-cols-2 gap-x-12 gap-y-5" : "space-y-5",
                  )}
                >
                  {group.items.map((item) => {
                    const isChecked = selected.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between group cursor-pointer hover:bg-foreground/[0.01] rounded-lg transition-all"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* 🔵 ACCESSIBLE REAL CHECKBOX (HIDDEN) */}
                          <input
                            id={item.id}
                            type="checkbox"
                            className="sr-only"
                            checked={isChecked}
                            onChange={() => toggleItem(item.id)}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                          />

                          {/* 🔵 THE LABEL (Associated with input via htmlFor) */}
                          <label
                            htmlFor={item.id}
                            className="flex items-center gap-3 cursor-pointer select-none"
                          >
                            <div
                              aria-hidden="true"
                              className={cn(
                                "w-4 h-4 rounded-md border flex items-center justify-center transition-all duration-300 shrink-0",
                                isChecked
                                  ? "bg-primary border-primary shadow-lg shadow-primary/20"
                                  : "bg-foreground/[0.03] border-border/20 group-hover:border-primary/60 shadow-inner",
                              )}
                            >
                              {isChecked && (
                                <Check
                                  size={10}
                                  className="text-white stroke-[4px] animate-in zoom-in-50 duration-300"
                                />
                              )}
                            </div>
                            <span
                              className={cn(
                                "text-[13px] font-bold transition-all truncate",
                                isChecked
                                  ? "text-foreground"
                                  : "text-muted-foreground/80 group-hover:text-foreground",
                              )}
                            >
                              {item.label}
                            </span>
                          </label>
                        </div>
                        {group.id !== "location" && (
                          <span
                            className={cn(
                              "text-[10px] font-bold transition-colors",
                              isChecked ? "text-primary opacity-100" : "text-muted-foreground/20",
                            )}
                          >
                            {item.count}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
