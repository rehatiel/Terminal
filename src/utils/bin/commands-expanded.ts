// Expanded commands meant to emulate linux

import * as bin from './index';
import config from '../../../config.json';

export const cat = async (args: string[]): Promise<string> => {
  var file = args.join();
  if (!file) {
    return 'Meow';
  }
  else if (file == 'flag.txt'){
    return 'Flag{You got the flag}';
  }
    else if (file == '.garbage'){
    return `
///////(#@@@@@@@@@@@@%%%#####(((/(((((/////(((((((((#((##%%@@@@@@@@@@#//////////
((/////(&@@@@@@@@@&&&&%%#######((/////////////((((((#((####%@@@@@@@@@(//////////
(//////(#@@@@@@@@@&%#%@@&&&%%&&&&&%#((/////(#%%%&%&%%%&&####@@%@@@@@@///////////
////////(@@@@@&@@@%%#&&%########%%%%##(((((###(((((####%%#(#&&@@@@@@%///////////
////////%@@@@(@@@&%##%%%%%%%&@%&%##%%%#//(##%%%%%&%%%%##(#(##&&@@@@@&/*/////////
///////(@@@@@%%&@&%####%&&&%(%#/(((((##(((##((/##/(%%%#(((###%&@@@@@#/*/**//////
///////#@@@@@@(&@@&%#((##((#((((/((####(((((((((((((((((((##%#&@@@@@(****///////
////////(@@@@@@@@@&%%##(((/(/(//(((####(//(((((///////(((###%#&@@@@@@*****//////
//////////@@@@@@@@&%%%###(((((((#%####(////((##((///((((####%%%@@@@@@**/*///////
///////////%%@@@%@&%%%%###(((((##%&@@&#((((%&%####(((((####%%%%@@@@@@****///////
/////////////&@@@@@%%%%%%#######%%%&%@@@@&%%###############%%&@&@@@@&/**////////
///////////(//@@@@@&&%%%&#%##%%#&&&%%%#/(#%#%%&%%%%#######%%&@@@@@&&@/*****/////
/////////(///%@@@@@@&&%%%%###&@&@@&&&%((#((%&&&&&&@%######%&@@@@@@(%&**/*///////
//////////(%@@@@@@@@@@&%%%%##&%#%@&&&@@&@@&&%%#%##&######%%@@@@@@@@(/**/////////
/////#&%#@@@@@@@@@@@@@@&%&&%%%(((/%((((///((/(#%#(&%(###%%@@@@@@@&@@#///////////
//////#@@@@@@@@@@@@@@@@@@&@&%#(####///((////(/(##(#&%%%&&@@@@@@@@@@@@@@(////////
///////(@@@@@@@@@@@@@@@@@@@@#(#(##%%#(((///((#%%#((%&@@@@@@@@@@@@@@@@@@@#(//////
///////(@@@@@@@@@@@@@@@@@@@@@#(#######%%%##%%%##((#&@@@@@@@@@@@@@@%&@@@%&(//////
/////////#&@@@@@@@@@@@@@@@@@@@&%((#####&#%###(#((#%@@@@@@@@@@@@@@@(%/@@@////////
I had to move fast. The hacker copied my garbage file.`;
  }
    else if (file == '/proc/meminfo'){
    return `
MemTotal:        2865988 kB
MemFree:          425868 kB
MemAvailable:     891804 kB
Buffers:           59864 kB
Cached:           509712 kB
SwapCached:        50156 kB
Active:          1090448 kB
Inactive:        1056140 kB
Active(anon):     771180 kB
Inactive(anon):   849068 kB
Active(file):     319268 kB
Inactive(file):   207072 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:       2935804 kB
SwapFree:        2590460 kB
Dirty:               908 kB
Writeback:             0 kB
AnonPages:       1397616 kB
Mapped:           263528 kB
Shmem:             62148 kB
Slab:             210792 kB
SReclaimable:     128572 kB
SUnreclaim:        82220 kB
KernelStack:       11180 kB
PageTables:        17192 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:     4368796 kB
Committed_AS:    6157468 kB
VmallocTotal:   34359738367 kB
VmallocUsed:           0 kB
VmallocChunk:          0 kB
Percpu:             2144 kB
HardwareCorrupted:     0 kB
AnonHugePages:    462848 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB
Hugetlb:               0 kB
DirectMap4k:      230256 kB
DirectMap2M:     2705408 kB
DirectMap1G:           0 kB`;
  }
  else
    return `
cat: ${file} : No such file or directory`;
};

export const ls = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (!param) {
    return `
documents	medical 	private 	taxes
malware		photos		projects	flag.txt`;
  }
  else if (param == '-l'){
    return `
drwxr-----  8 bob bob 4096 Jan   3 20:31 documents
drwxr-----  8 bob bob 4096 Jan  13 07:11 malware
drwxr-----  8 bob bob 4096 Feb  38 09:22 medical
drwxr-----  8 bob bob 4096 Feb   1 01:44 photos
drwxr-----  8 bob bob 4096 May  30 12:14 private
drwxr-----  8 bob bob 4096 Jun  22 16:22 projects
drwxr-----  8 bob bob 4096 Jan  12 21:46 private
drwxr-----  8 bob bob 4096 Apr  12 12:52 taxes
-rw-r--r--  1 bob bob  546 Jan  28 20:22 flag.txt`;
  }
  else if (param == '-la' || param == '-al' ){
    return `
drwxr-xr-x 19 root root  4096 Sep  15 19:38 .
drwxr-xr-x 19 root root  4096 Sep  15 19:38 ..
drwxr-----  8 bob bob 4096 Jan   3 20:31 documents
drwxr-----  8 bob bob 4096 Sep  15 20:31 .garbage
drwxr-----  8 bob bob 4096 Jan  13 07:11 malware
drwxr-----  8 bob bob 4096 Feb  38 09:22 medical
drwxr-----  8 bob bob 4096 Feb   1 01:44 photos
drwxr-----  8 bob bob 4096 May  30 12:14 private
drwxr-----  8 bob bob 4096 Jun  22 16:22 projects
drwxr-----  8 bob bob 4096 Jan  12 21:46 private
drwxr-----  8 bob bob 4096 Apr  12 12:52 taxes
-rw-r--r--  1 bob bob  546 Jan  28 20:22 flag.txt`;
  }
  else if (param == '-a'){
    return `
.			.garbage	photos		taxes
..			malware		private		flag.txt
documents	medical		projects`;
  }
  else
    return `
documents	medical 	private 	taxes
malware		photos		projects	flag.txt`;
};

export const more = async (args: string[]): Promise<string> => {
  var file = args.join();
  if (!file) {
    return 'Please sir, can I have some';
  }
  else if (file == 'flag.txt'){
    return 'Flag{You got the flag}';
  }
      else if (file == '.garbage'){
    return `
///////(#@@@@@@@@@@@@%%%#####(((/(((((/////(((((((((#((##%%@@@@@@@@@@#//////////
((/////(&@@@@@@@@@&&&&%%#######((/////////////((((((#((####%@@@@@@@@@(//////////
(//////(#@@@@@@@@@&%#%@@&&&%%&&&&&%#((/////(#%%%&%&%%%&&####@@%@@@@@@///////////
////////(@@@@@&@@@%%#&&%########%%%%##(((((###(((((####%%#(#&&@@@@@@%///////////
////////%@@@@(@@@&%##%%%%%%%&@%&%##%%%#//(##%%%%%&%%%%##(#(##&&@@@@@&/*/////////
///////(@@@@@%%&@&%####%&&&%(%#/(((((##(((##((/##/(%%%#(((###%&@@@@@#/*/**//////
///////#@@@@@@(&@@&%#((##((#((((/((####(((((((((((((((((((##%#&@@@@@(****///////
////////(@@@@@@@@@&%%##(((/(/(//(((####(//(((((///////(((###%#&@@@@@@*****//////
//////////@@@@@@@@&%%%###(((((((#%####(////((##((///((((####%%%@@@@@@**/*///////
///////////%%@@@%@&%%%%###(((((##%&@@&#((((%&%####(((((####%%%%@@@@@@****///////
/////////////&@@@@@%%%%%%#######%%%&%@@@@&%%###############%%&@&@@@@&/**////////
///////////(//@@@@@&&%%%&#%##%%#&&&%%%#/(#%#%%&%%%%#######%%&@@@@@&&@/*****/////
/////////(///%@@@@@@&&%%%%###&@&@@&&&%((#((%&&&&&&@%######%&@@@@@@(%&**/*///////
//////////(%@@@@@@@@@@&%%%%##&%#%@&&&@@&@@&&%%#%##&######%%@@@@@@@@(/**/////////
/////#&%#@@@@@@@@@@@@@@&%&&%%%(((/%((((///((/(#%#(&%(###%%@@@@@@@&@@#///////////
//////#@@@@@@@@@@@@@@@@@@&@&%#(####///((////(/(##(#&%%%&&@@@@@@@@@@@@@@(////////
///////(@@@@@@@@@@@@@@@@@@@@#(#(##%%#(((///((#%%#((%&@@@@@@@@@@@@@@@@@@@#(//////
///////(@@@@@@@@@@@@@@@@@@@@@#(#######%%%##%%%##((#&@@@@@@@@@@@@@@%&@@@%&(//////
/////////#&@@@@@@@@@@@@@@@@@@@&%((#####&#%###(#((#%@@@@@@@@@@@@@@@(%/@@@////////
I had to move fast. The hacker copied my garbage file.`;
}
  else
    return `
more: stat of ${file} failed: No such file or directory`;
};

export const kill = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (param == '2347'){
    return `
Kernel bug detected[#1]:
Cpu 0
$ 0   : 00000000 00000000 0fffff00 0fffff00
$ 4   : c6800000 850b7780 8b0043c0 00000040
$ 8   : 000004ac 000004ac 00000002 844e8000
$12   : 00000000 feced300 8430d2ac 0000000a
$16   : 00000040 000000fc 8b759300 00000001
$20   : 00000012 84370000 00000004 00000009
$24   : 00000000 8403d4f4                  
$28   : 8b1c0000 8b1c3ee0 0000000a 84255764
Hi    : 003d08ef
Lo    : 79432700
epc   : 840a754c 0x840a754c
    Tainted: P          
ra    : 84255764 0x84255764
Status: 1100dc03    KERNEL EXL IE 
Cause : 00800034
PrId  : 00019749 (MIPS 74Kc)
Modules linked in: em8xxxcursor(P) em8xxxfb em8xxxcopybit(P) pmem_rua em8xxx(P) llad(P)
Process events/0 (pid: 4, threadinfo=8b1c0000, task=8b0323d8, tls=00000000)
Stack : 8b0323d8 8402d074 843d0c68 843d10e8 8b1c3f80 8b0323d8 843d0cc8 8b2d6de8
        8b2d6de8 8402d194 00000003 00000000 00000000 84300000 84374104 8b124c80
        84255238 fffffffc efffffff 8431d16c 8431d1a4 00000000 00000000 8404c364
        8404cc6c 00000001 8b124c88 8b124c80 8b124c88 8b124c80 8b1c3f80 00000000
        00000000 00000000 00000000 8404cc04 8b03254c 8b03254c 84051638 00000000
        ...
Call Trace:[<8402d074>] 0x8402d074
[<8402d194>] 0x8402d194
[<84255238>] 0x84255238
[<8404c364>] 0x8404c364
[<8404cc6c>] 0x8404cc6c
[<8404cc04>] 0x8404cc04
[<84051638>] 0x84051638
[<84051b14>] 0x84051b14
[<8404cba8>] 0x8404cba8
[<84051650>] 0x84051650
[<8401504c>] 0x8401504c


Code: 3c030fff  3463ff00  00431024 <00028036> 09029cfd  24050001  27bdffc8  0085102b  afb7002c 
Kernel panic - not syncing: Fatal exception in interrupt`;
window.close('https://cyanidesyndrome.com');
  }
  else
    return `
kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]`;
};

export const history = async (args: string[]): Promise<string> => {
  return `
Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived, and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting-place for those who here gave their lives, that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate, we can not consecrate we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us that from these honored dead we take increased devotion to that cause for which they here gave the last full measure of devotion - that we here highly resolve that these dead shall not have died in vain that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.`; 
};

export const w = async (args: string[]): Promise<string> => {
  return `
10:34:11 up 442 days,  2:12,    2 users,    load average: 2.33, 1.05, 1.76
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
user     pts/0    98.249.36.117    19:18    1.00s  0.14s  0.01s w
bob      tty2     tty2             11:11    8:06m  0.02s  0.02s /usr/libexec/gnome-session-binary --session=ubuntu`; 
};

export const touch = async (args: string[]): Promise<string> => {
  return `touch: cannot touch '${args[0]}': Permission denied`; 
};

export const ps = async (args: string[]): Promise<string> => {
  return `
    PID TTY          TIME CMD
   2347 pts/0    00:00:00 bash
   4659 pts/0    00:00:00 ps`; 
};

export const uptime = async (args: string[]): Promise<string> => {
  return `
10:34:11 up 442 days,  2:12,    2 users,    load average: 2.33, 1.05, 1.76`; 
};

export const pwd = async (args: string[]): Promise<string> => {
  return `/home/bob`; 
};

export const cd = async (args: string[]): Promise<string> => {
  return `cd: permission denied: ${args[0]}`; 
};

export const rm = async (args: string[]): Promise<string> => {
  return `rm: cannot remove '${args[0]}': Permission denied`; 
};

export const cp = async (args: string[]): Promise<string> => {
  return `cp: cannot create regular file '${args[0]}': Permission denied`; 
};

export const free = async (args: string[]): Promise<string> => {
  return `
              total        used        free      shared  buff/cache   available
Mem:        2865988     1756908      402980       62148      706100      877848
Swap:       2935804      345344     2590460`; 
};

export const df = async (args: string[]): Promise<string> => {
  return `
Filesystem     1K-blocks     Used Available Use% Mounted on
udev             1418104        0   1418104   0% /dev
tmpfs             286600    30192    256408  11% /run
/dev/vda1       56977256 11935260  42131744  23% /
tmpfs            1432992        0   1432992   0% /dev/shm
tmpfs               5120        0      5120   0% /run/lock
tmpfs             286596        0    286596   0% /run/user/0`; 
};

export const uname = async (args: string[]): Promise<string> => {
  var param = args.join();
  if (param == '-a'){
    return `
Linux g-server001.gibson.local 4.19.0-23-amd64 #1 SMP Debian 4.19.269-1 (2022-12-20) x86_64 GNU/Linux`;
  }
  else
    return `
Linux`;
};
